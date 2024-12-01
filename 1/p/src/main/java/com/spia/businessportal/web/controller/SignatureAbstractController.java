/*
 * Fluxit S.A
 * La Plata - Buenos Aires - Argentina
 * http://www.fluxit.com.ar
 * Author: leandro
 * Date:  13 de jun. de 2016 - 8:55:51 a. m.
 */
package com.spia.businessportal.web.controller;

import java.io.ByteArrayInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.security.GeneralSecurityException;
import java.security.PrivateKey;
import java.security.cert.Certificate;
import java.util.ArrayList;
import java.util.List;

import org.apache.pdfbox.pdmodel.interactive.digitalsignature.SignatureInterface;
import org.bouncycastle.asn1.ASN1Encodable;
import org.bouncycastle.asn1.ASN1EncodableVector;
import org.bouncycastle.asn1.ASN1Primitive;
import org.bouncycastle.asn1.DERObjectIdentifier;
import org.bouncycastle.asn1.DERSet;
import org.bouncycastle.asn1.cms.AttributeTable;
import org.bouncycastle.asn1.cms.Attributes;
import org.bouncycastle.asn1.pkcs.PKCSObjectIdentifiers;
import org.bouncycastle.asn1.x509.Attribute;
import org.bouncycastle.cert.X509CertificateHolder;
import org.bouncycastle.cert.jcajce.JcaCertStore;
import org.bouncycastle.cms.CMSException;
import org.bouncycastle.cms.CMSSignedData;
import org.bouncycastle.cms.CMSSignedDataGenerator;
import org.bouncycastle.cms.SignerInformation;
import org.bouncycastle.cms.SignerInformationStore;
import org.bouncycastle.cms.jcajce.JcaSignerInfoGeneratorBuilder;
import org.bouncycastle.operator.ContentSigner;
import org.bouncycastle.operator.OperatorCreationException;
import org.bouncycastle.operator.jcajce.JcaContentSignerBuilder;
import org.bouncycastle.operator.jcajce.JcaDigestCalculatorProviderBuilder;
import org.bouncycastle.tsp.TSPException;
import org.bouncycastle.util.Store;
import org.jfree.util.Log;

import com.itextpdf.text.DocumentException;
import com.itextpdf.text.Rectangle;
import com.itextpdf.text.pdf.PdfReader;
import com.itextpdf.text.pdf.PdfSignatureAppearance;
import com.itextpdf.text.pdf.PdfStamper;
import com.itextpdf.text.pdf.security.BouncyCastleDigest;
import com.itextpdf.text.pdf.security.ExternalDigest;
import com.itextpdf.text.pdf.security.ExternalSignature;
import com.itextpdf.text.pdf.security.MakeSignature;
import com.itextpdf.text.pdf.security.MakeSignature.CryptoStandard;
import com.itextpdf.text.pdf.security.PrivateKeySignature;
import com.itextpdf.text.pdf.security.TSAClient;
import com.spia.businessportal.common.utils.CMSProcessableInputStream;

/**
 * @author leandro
 *
 */
public abstract class SignatureAbstractController extends AbstractController implements SignatureInterface {

    private PrivateKey privateKey;
    private Certificate certificate;
    private TSAClient tsaClient;

    public void signDetached(ByteArrayInputStream document, OutputStream os, String digestAlgorithm, String provider,
            CryptoStandard subfilter, String reason, String location)
            throws GeneralSecurityException, IOException, DocumentException {
        // Creating the reader and the stamper
        PdfReader reader = new PdfReader(document);
        PdfStamper stamper = PdfStamper.createSignature(reader, os, '\0');
        // Creating the appearance
        PdfSignatureAppearance appearance = stamper.getSignatureAppearance();
        appearance.setReason(reason);
        appearance.setLocation(location);
        appearance.setVisibleSignature(new Rectangle(36, 850, 144, 780), 1, "sig");
        // Creating the signature
        ExternalDigest digest = new BouncyCastleDigest();
        List<Certificate> listCert = new ArrayList<Certificate>();
        listCert.add(this.getCertificate());
        Certificate[] chain = new Certificate[listCert.size()];
        chain = listCert.toArray(chain);
        ExternalSignature signature = new PrivateKeySignature(this.getPrivateKey(), digestAlgorithm, null);
        MakeSignature.signDetached(appearance, digest, signature, chain, null, null, null, 0, subfilter);
    }

    /**
     * SignatureInterface implementation.
     *
     * This method will be called from inside of the pdfbox and create the PKCS #7 signature. The given InputStream contains the bytes that are given
     * by the byte range.
     *
     * This method is for internal use only. <-- TODO this method should be private
     *
     * Use your favorite cryptographic library to implement PKCS #7 signature creation.
     */
    @Override
    public byte[] sign(InputStream content) throws IOException {
        try {
            List<Certificate> certList = new ArrayList<Certificate>();
            certList.add(certificate);
            Store certs = new JcaCertStore(certList);
            CMSSignedDataGenerator gen = new CMSSignedDataGenerator();
            org.bouncycastle.asn1.x509.Certificate cert = org.bouncycastle.asn1.x509.Certificate
                    .getInstance(ASN1Primitive.fromByteArray(certificate.getEncoded()));
            ContentSigner sha1Signer = new JcaContentSignerBuilder("SHA1WithRSA").build(privateKey);
            gen.addSignerInfoGenerator(
                    new JcaSignerInfoGeneratorBuilder(new JcaDigestCalculatorProviderBuilder().build())
                            .build(sha1Signer, new X509CertificateHolder(cert)));
            gen.addCertificates(certs);
            CMSProcessableInputStream msg = new CMSProcessableInputStream(content);
            CMSSignedData signedData = gen.generate(msg, false);
            if (tsaClient != null) {
                signedData = signTimeStamps(signedData);
            }
            return signedData.getEncoded();
        } catch (GeneralSecurityException e) {
            throw new IOException(e);
        } catch (CMSException e) {
            throw new IOException(e);
        } catch (TSPException e) {
            throw new IOException(e);
        } catch (OperatorCreationException e) {
            throw new IOException(e);
        }
    }

    // @Override
    // public byte[] sign(InputStream content) throws IOException
    // {
    //
    // CMSProcessableInputStream input = new CMSProcessableInputStream(content);
    // CMSSignedDataGenerator gen = new CMSSignedDataGenerator();
    // // CertificateChain
    // List<Certificate> certList = Arrays.asList(certificate);
    // CertStore certStore = null;
    // try {
    // certStore = CertStore.getInstance("Collection", new CollectionCertStoreParameters(certList), new BouncyCastleProvider());
    // gen.addSigner(privateKey, (X509Certificate) certList.get(0), CMSSignedGenerator.DIGEST_SHA256);
    // gen.addCertificatesAndCRLs(certStore);
    // CMSSignedData signedData = gen.generate((CMSProcessable) input, false, "leo");
    // return signedData.getEncoded();
    // } catch (Exception e) {
    // // should be handled
    // System.err.println("Error while creating pkcs7 signature.");
    // e.printStackTrace();
    // }
    // throw new RuntimeException("Problem while preparing signature");
    // }
    /**
     * We just extend CMS signed Data
     *
     * @param signedData
     *            -Generated CMS signed data
     * @return CMSSignedData - Extended CMS signed data
     */

    protected CMSSignedData signTimeStamps(CMSSignedData signedData) throws IOException, TSPException {
        SignerInformationStore signerStore = signedData.getSignerInfos();
        List<SignerInformation> newSigners = new ArrayList<SignerInformation>();

        for (Object signer : signerStore.getSigners()) {
            newSigners.add(signTimeStamp((SignerInformation) signer));
        }

        // TODO do we have to return a new store?
        return CMSSignedData.replaceSigners(signedData, new SignerInformationStore(newSigners));
    }

    /**
     * We are extending CMS Signature
     *
     * @param signer
     *            information about signer
     * @return information about SignerInformation
     */
    private SignerInformation signTimeStamp(SignerInformation signer) throws IOException, TSPException {
        AttributeTable unsignedAttributes = signer.getUnsignedAttributes();

        ASN1EncodableVector vector = new ASN1EncodableVector();
        if (unsignedAttributes != null) {
            vector = unsignedAttributes.toASN1EncodableVector();
        }

        byte[] token = null;
        try {
            token = getTsaClient().getTimeStampToken(signer.getSignature());
        } catch (Exception e) {
            Log.error(e.getStackTrace());
        }
        DERObjectIdentifier oid = (DERObjectIdentifier) PKCSObjectIdentifiers.id_aa_signatureTimeStampToken;
        ASN1Encodable signatureTimeStamp = new Attribute(oid, new DERSet(ASN1Primitive.fromByteArray(token)));

        vector.add(signatureTimeStamp);
        Attributes signedAttributes = new Attributes(vector);

        SignerInformation newSigner = SignerInformation.replaceUnsignedAttributes(signer, new AttributeTable(vector));

        // TODO can this actually happen?
        if (newSigner == null) {
            return signer;
        }

        return newSigner;
    }

    public PrivateKey getPrivateKey() {
        return privateKey;
    }

    public void setPrivateKey(PrivateKey privateKey) {
        this.privateKey = privateKey;
    }

    public Certificate getCertificate() {
        return certificate;
    }

    public void setCertificate(Certificate certificate) {
        this.certificate = certificate;
    }

    public TSAClient getTsaClient() {
        return tsaClient;
    }

    public void setTsaClient(TSAClient tsaClient) {
        this.tsaClient = tsaClient;
    }

}
