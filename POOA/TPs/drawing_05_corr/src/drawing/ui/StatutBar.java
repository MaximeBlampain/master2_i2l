package drawing.ui;

import drawing.shapes.IShape;
import javafx.scene.control.Label;
import javafx.scene.layout.HBox;

public class StatutBar extends HBox implements Observer {

    private Label label;
    private DrawingPane dpane;

    public StatutBar(DrawingPane dpane) {
        this.dpane = dpane;
        this.label = new Label("");
        this.update();
        this.getChildren().add(this.label);
    }

    @Override
    public void update() {
        int selSize = 0;
        for(IShape s: dpane.getSelection())
            selSize++;
        label.setText(dpane.getNbShapes() + " forme(s) dont " + selSize + " sélectionnée(s)");
    }
}
