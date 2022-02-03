package com.mblampain.tp1_servlet.netflix_clone ;

public class NetflixSerieDO {

    private Long id;
    private String nom;
    private Boolean productionOriginale;
    private Long annee;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }


    public String getNom() {
        return nom;
    }

    public void setNom(String nom) {
        this.nom = nom;
    }

    public Boolean getProductionOriginale() {
        return productionOriginale;
    }

    public void setProductionOriginale(Boolean productionOriginale) {
        this.productionOriginale = productionOriginale;
    }

    public Long getAnnee() {
        return annee;
    }

    public void setAnnee(Long annee) {
        this.annee = annee;
    }


}
