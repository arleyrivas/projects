package com.spia.businessportal.common.entities.dto;

import java.io.Serializable;
import java.util.List;

public class HoldListDTO implements Serializable {

    private List<HoldDTO> holds;

    public List<HoldDTO> getHolds() {
        return holds;
    }

    public void setHolds(List<HoldDTO> holds) {
        this.holds = holds;
    }

}
