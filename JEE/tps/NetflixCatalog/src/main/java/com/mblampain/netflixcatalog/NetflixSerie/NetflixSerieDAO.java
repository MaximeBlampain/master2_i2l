package com.mblampain.netflixcatalog.NetflixSerie;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

public class NetflixSerieDAO {
    private List<NetflixSerieDO> data = new ArrayList<>(Arrays.asList(
            new NetflixSerieDO(1L, "La casa de papel", true, 2017L),
            new NetflixSerieDO(2L, "The 100", false, 2017L),
            new NetflixSerieDO(3L, "Black Mirror", true, 2017L)
    ));

    public List<NetflixSerieDO> findAll() {
        return data;
    }

    public NetflixSerieDO findByName(String nomSerie) {
        for (NetflixSerieDO serie : data){
            if(nomSerie.equals(serie.getNom())) return serie;
        }
        return null;
    }
}
