package com.mblampain.netflixcatalog.NetflixSaison;

import com.mblampain.netflixcatalog.NetflixSerie.NetflixSerieDO;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

public class NetflixSaisonDAO {
    private List<NetflixSaisonDO> data = new ArrayList<>(Arrays.asList(
            new NetflixSaisonDO(1L, 1L, 1L, 13L),
            new NetflixSaisonDO(2L, 1L, 2L, 9L),
            new NetflixSaisonDO(3L, 2L, 1L, 13L),
            new NetflixSaisonDO(4L, 2L, 2L, 16L),
            new NetflixSaisonDO(5L, 2L, 3L, 16L),
            new NetflixSaisonDO(6L, 2L, 4L, 13L),
            new NetflixSaisonDO(7L, 3L, 1L, 3L),
            new NetflixSaisonDO(8L, 3L, 2L, 4L),
            new NetflixSaisonDO(9L, 3L, 3L, 6L),
            new NetflixSaisonDO(10L, 3L, 4L, 6L)
    ));

    public List<NetflixSaisonDO> findAll() {
        return data;
    }

    public List<NetflixSaisonDO> findByIdSerie(Long idSerie){
        return data.stream()
                .filter(saison -> saison.getFkSerie() == idSerie)
                .collect(Collectors.toList());
    }
}
