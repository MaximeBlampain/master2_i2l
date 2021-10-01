package com.mblampain.netflixcatalog.NetflixSerie;

import com.mblampain.netflixcatalog.NetflixSaison.NetflixSaisonDAO;
import com.mblampain.netflixcatalog.NetflixSaison.NetflixSaisonDO;

import java.util.ArrayList;
import java.util.List;

public class NetflixSerieBO {

    private NetflixSerieDAO serieDAO;
    private NetflixSaisonDAO saisonDAO;

    public NetflixSerieBO() {
        serieDAO = new NetflixSerieDAO();
        saisonDAO = new NetflixSaisonDAO();
    }

    public List<NetflixSerieDTO> findAll() {
        List<NetflixSerieDO> series = serieDAO.findAll();

        List<NetflixSerieDTO> listToReturn = new ArrayList<>(series.size());

        for(NetflixSerieDO serie: series){
            List<NetflixSaisonDO> saisons = saisonDAO.findByIdSerie(serie.getId());
            NetflixSerieDTO dto = map(serie, saisons);
            listToReturn.add(dto);
        }

        return  listToReturn;
    }

    private NetflixSerieDTO map(NetflixSerieDO serie, List<NetflixSaisonDO> saisons){
        NetflixSerieDTO dto = new NetflixSerieDTO();
        dto.setNom(serie.getNom());
        dto.setNbSaisons((long) saisons.size());
        int nbEpisodes = 0;

        for(NetflixSaisonDO saison : saisons){
            nbEpisodes += saison.getNbEpisodes();
        }

        dto.setNbEpisodes((long) nbEpisodes);
        return dto;
    }
}
