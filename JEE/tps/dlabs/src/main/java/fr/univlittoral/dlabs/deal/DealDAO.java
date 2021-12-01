package fr.univlittoral.dlabs.deal;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import javax.persistence.Query;
import java.util.ArrayList;
import java.util.List;

@Repository
public class DealDAO{
    @Autowired
    private EntityManager em;

    public List<DealDO> findAll() {
        Query query = em.createQuery("from DealDO");
        return (ArrayList) query.getResultList();
    }

    public DealDO findById(String idDeal) {
        Query query = em.createQuery("from DealDO where id = :id");
        query.setParameter("id", Integer.parseInt(idDeal));
        return (DealDO) query.getSingleResult();
    }
}
