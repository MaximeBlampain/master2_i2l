package fr.univlittoral.dlabs.repository;

import fr.univlittoral.dlabs.doo.DealDO;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;


@Transactional(propagation = Propagation.MANDATORY)
public interface IDealRepository extends JpaRepository<DealDO, Integer> {
}
