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

    public DealDetailsDTO findById(String id){
        DealDO deal = dealDAO.findById(id);
        Double discount = (1-(deal.getNewPrice()/deal.getOldPrice()))*100;

        DealDetailsDTO dto = new DealDetailsDTO();
        dto.setId(deal.getId());
        dto.setTitle(deal.getTitle());
        dto.setShopName(deal.getShopName());
        dto.setShopLink(deal.getShopLink());
        dto.setTemperature(deal.getTemperature());
        dto.setCreator(deal.getCreator());
        dto.setOldPrice(deal.getOldPrice());
        dto.setNewPrice(deal.getNewPrice());
        dto.setDiscount(discount);
        dto.setDate(deal.getDate());
        dto.setImageUrl(deal.getImageUrl());
        dto.setDescription(deal.getDescription());
        dto.setPromoCode(deal.getPromoCode());
        return dto;
    }


}
