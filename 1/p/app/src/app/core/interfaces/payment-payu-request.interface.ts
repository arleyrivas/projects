export interface IPaymentPayuRequest {
  merchantId: string;
	accountId: string;
	description: string;
	referenceCode: string;
	amount: string;
	tax: number;
	taxReturnBase: number;
	currency: string;
	signature: string;
	test: number;
	buyerEmail: string;
	responseUrl: string;
	confirmationUrl: string;
}