package com.mblampain.tp1_servlet.netflix_clone;

public class NetflixSerieDTO {
    private String nomSerie;
    private Long nbSaisons;
    private Long nbEpisodes;

    public String getNomSerie() {
        return nomSerie;
    }

    public void setNomSerie(String nomSerie) {
        this.nomSerie = nomSerie;
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
