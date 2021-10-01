package com.mblampain.netflixcatalog.NetflixSerie;

public class NetflixSerieDTO {

    private String nom;
    private Long nbSaisons;
    private Long nbEpisodes;

    public String getNom() {
        return nom;
    }

    public void setNom(String nom) {
        this.nom = nom;
    }

    public Long getNbSaisons() {
        return nbSaisons;
    }

    public void setNbSaisons(Long nbSaisons) {
        this.nbSaisons = nbSaisons;
    }

    public Long getNbEpisodes() {
        return nbEpisodes;
    }

    public void setNbEpisodes(Long nbEpisodes) {
        this.nbEpisodes = nbEpisodes;
    }
}
