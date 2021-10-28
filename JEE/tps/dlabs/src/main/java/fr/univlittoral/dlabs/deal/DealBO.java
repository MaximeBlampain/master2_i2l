package fr.univlittoral.dlabs.deal;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class DealBO {
    @Autowired
    private DealDAO dealDAO;

    public List<DealOverviewDTO> findAll() {
        List<DealDO> deals = dealDAO.findAll();

        List<DealOverviewDTO> formattedDeals = new ArrayList<>(deals.size());
        for( DealDO deal : deals){
            DealOverviewDTO dto = mapOverview(deal);
            formattedDeals.add(dto);
        }

        return formattedDeals;
    }

    private DealOverviewDTO mapOverview(DealDO deal){
        DealOverviewDTO dto = new DealOverviewDTO();
        dto.setId(deal.getId());
        dto.setTitle(deal.getTitle());
        dto.setShopName(deal.getShopName());
        dto.setShopLink(deal.getShopLink());
        dto.setTemperature(deal.getTemperature());
        dto.setCreator(deal.getCreator());
        dto.setDate(deal.getDate());
        dto.setImageUrl(deal.getImageUrl());

        return dto;
    }


}
