package fr.univlittoral.dlabs.deal;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(value = "/deal")
public class DealRestService {
    @Autowired
    DealBO dealBO;

    @RequestMapping(method = RequestMethod.GET, value = "/ping")
    public String ping() { return "Pong"; }

    @RequestMapping(method = RequestMethod.GET, value = "/all")
    public List<DealOverviewDTO> getAll(){
        return dealBO.findAll();
    }

    @RequestMapping(method = RequestMethod.GET)
    public DealDO
}
