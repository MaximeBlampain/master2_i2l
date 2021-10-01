package com.mblampain.netflixcatalog.NetflixSaison;

public class NetflixSaisonDO {

    private Long id;
    private Long fkSerie;
    private Long numSaison;
    private Long nbEpisodes;

    public NetflixSaisonDO(Long id, Long fkSerie, Long numSaison, Long nbEpisodes){
        this.id = id;
        this.fkSerie = fkSerie;
        this.numSaison = numSaison;
        this.nbEpisodes = nbEpisodes;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getFkSerie() {
        return fkSerie;
    }

    public void setFkSerie(Long fkSerie) {
        this.fkSerie = fkSerie;
    }

    public Long getNumSaison() {
        return numSaison;
    }

    public void setNumSaison(Long numSaison) {
        this.numSaison = numSaison;
    }

    public Long getNbEpisodes() {
        return nbEpisodes;
    }

    public void setNbEpisodes(Long nbEpisodes) {
        this.nbEpisodes = nbEpisodes;
    }

}
