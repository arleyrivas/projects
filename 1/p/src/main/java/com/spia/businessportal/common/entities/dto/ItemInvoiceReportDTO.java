package com.spia.businessportal.common.entities.dto;

import java.util.Comparator;

public class ItemInvoiceReportDTO {

    // contenedor
    private String itemEventEntityId;
    // descripción
    private String itemTariffDescription;
    // peso/vol
    private String itemQuantityUnit;
    // cantidad
    private Double itemQuantityBilled;
    // IVA
    private String taxItem;
    // tarifa COP
    private Double itemRateBilled;
    // total COP
    private Double itemAmount;

    public ItemInvoiceReportDTO() {
    }

    public ItemInvoiceReportDTO(String itemTariffDescription) {
        this.itemTariffDescription = itemTariffDescription;
    }

    public String getItemEventEntityId() {
        return itemEventEntityId;
    }

    public void setItemEventEntityId(String itemEventEntityId) {
        this.itemEventEntityId = itemEventEntityId;
    }

    public String getItemTariffDescription() {
        return itemTariffDescription;
    }

    public void setItemTariffDescription(String itemTariffDescription) {
        this.itemTariffDescription = itemTariffDescription;
    }

    public String getItemQuantityUnit() {
        return itemQuantityUnit;
    }

    public void setItemQuantityUnit(String itemQuantityUnit) {
        this.itemQuantityUnit = itemQuantityUnit;
    }

    public Double getItemQuantityBilled() {
        return itemQuantityBilled;
    }

    public void setItemQuantityBilled(Double itemQuantityBilled) {
        this.itemQuantityBilled = itemQuantityBilled;
    }

    public String getTaxItem() {
        return taxItem;
    }

    public void setTaxItem(String taxItem) {
        this.taxItem = taxItem;
    }

    public Double getItemRateBilled() {
        return itemRateBilled;
    }

    public void setItemRateBilled(Double itemRateBilled) {
        this.itemRateBilled = itemRateBilled;
    }

    public Double getItemAmount() {
        return itemAmount;
    }

    public void setItemAmount(Double itemAmount) {
        this.itemAmount = itemAmount;
    }

    public static final Comparator<ItemInvoiceReportDTO> COMPARE_BY_NBR = new Comparator<ItemInvoiceReportDTO>() {
        public int compare(ItemInvoiceReportDTO i1, ItemInvoiceReportDTO i2) {

            int i = i1.getItemEventEntityId().compareTo(i2.getItemEventEntityId());

            if (i != 0) {
                return i;
            } else {
                String firstString = i1.getItemTariffDescription();
                String secondString = i2.getItemTariffDescription();

                if (secondString == null || firstString == null) {
                    return 0;
                }

                int lengthFirstStr = firstString.length();
                int lengthSecondStr = secondString.length();

                int index1 = 0;
                int index2 = 0;

                while (index1 < lengthFirstStr && index2 < lengthSecondStr) {
                    char ch1 = firstString.charAt(index1);
                    char ch2 = secondString.charAt(index2);

                    char[] space1 = new char[lengthFirstStr];
                    char[] space2 = new char[lengthSecondStr];

                    int loc1 = 0;
                    int loc2 = 0;

                    do {
                        space1[loc1++] = ch1;
                        index1++;

                        if (index1 < lengthFirstStr) {
                            ch1 = firstString.charAt(index1);
                        } else {
                            break;
                        }
                    } while (Character.isDigit(ch1) == Character.isDigit(space1[0]));

                    do {
                        space2[loc2++] = ch2;
                        index2++;

                        if (index2 < lengthSecondStr) {
                            ch2 = secondString.charAt(index2);
                        } else {
                            break;
                        }
                    } while (Character.isDigit(ch2) == Character.isDigit(space2[0]));

                    String str1 = new String(space1);
                    String str2 = new String(space2);

                    int result;

                    if (Character.isDigit(space1[0]) && Character.isDigit(space2[0])) {
                        Integer firstNumberToCompare = new Integer(Integer.parseInt(str1.trim()));
                        Integer secondNumberToCompare = new Integer(Integer.parseInt(str2.trim()));
                        result = firstNumberToCompare.compareTo(secondNumberToCompare);
                    } else {
                        result = str1.compareTo(str2);
                    }

                    if (result != 0) {
                        return result;
                    }
                }
                return lengthFirstStr - lengthSecondStr;
            }

        }
    };

    public static final Comparator<ItemInvoiceReportDTO> COMPARE_BY_DESCRIPTION = new Comparator<ItemInvoiceReportDTO>() {
        public int compare(ItemInvoiceReportDTO i1, ItemInvoiceReportDTO i2) {
            return i1.getItemTariffDescription().compareTo(i2.getItemTariffDescription());
        }
    };

    @Override
    public int hashCode() {
        final int prime = 31;
        int result = 1;
        result = prime * result + ((itemTariffDescription == null) ? 0 : itemTariffDescription.hashCode());
        return result;
    }

    @Override
    public boolean equals(Object obj) {
        if (this == obj)
            return true;
        if (obj == null)
            return false;
        if (getClass() != obj.getClass())
            return false;
        ItemInvoiceReportDTO other = (ItemInvoiceReportDTO) obj;
        if (itemTariffDescription == null) {
            if (other.itemTariffDescription != null)
                return false;
        } else if (!itemTariffDescription.equals(other.itemTariffDescription))
            return false;
        return true;
    }

}
