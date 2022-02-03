package com.mblampain.netflixcatalog.NetflixSerie;

public class NetflixSerieDO {

    private Long id;
    private String nom;
    private Boolean productionOriginale;
    private Long annee;

    public NetflixSerieDO(Long id, String nom, Boolean productionOriginale, Long annee){
        this.id = id;
        this.nom = nom;
        this.productionOriginale = productionOriginale;
        this.annee = annee;
    }
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
