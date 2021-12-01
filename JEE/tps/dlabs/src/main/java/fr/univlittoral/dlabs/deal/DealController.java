package fr.univlittoral.dlabs.deal;

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
    public DealDetailsDTO getById(@PathVariable("id") String id){
        return dealBO.findById(id);
    }
}
