package fr.univlittoral.dlabs.doo;

import javax.persistence.*;

@Entity
@Table(name = "tbl_user")
public class TemperatureDO {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Integer id;

    @Column(name = "value")
    private Integer value;

    @Column(name = "fk_user")
    private Integer fkUser;

    @Column(name = "fk_deal")
    private Integer fkDeal;

}
