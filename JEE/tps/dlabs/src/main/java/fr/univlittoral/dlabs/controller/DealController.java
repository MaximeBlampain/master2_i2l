package fr.univlittoral.dlabs.controller;

import fr.univlittoral.dlabs.bo.DealBO;
import fr.univlittoral.dlabs.doo.DealDO;
import fr.univlittoral.dlabs.dto.DealDetailsDTO;
import fr.univlittoral.dlabs.dto.DealOverviewDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping(value = "/deal")
public class DealController {
    @Autowired
    DealBO dealBO;

    @RequestMapping(method = RequestMethod.GET, value = "/ping")
    public String ping() { return "Pong"; }

    @RequestMapping(method = RequestMethod.GET, value = "/all")
    public List<DealOverviewDTO> getAll(){
        return dealBO.findAll();
    }

    @RequestMapping(method = RequestMethod.GET, value = "/{id}")
    public DealDetailsDTO getById(@PathVariable Integer id){
        return dealBO.findById(id);
    }

    @RequestMapping(method = RequestMethod.POST)
    public DealDO post(@RequestBody DealDO deal) {
        return dealBO.add(deal);
    }
}
