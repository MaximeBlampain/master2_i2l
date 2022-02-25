package drawing.ui;

import drawing.shapes.IShape;
import javafx.geometry.Insets;
import javafx.scene.control.Label;
import javafx.scene.layout.HBox;

public class StatutBar extends HBox implements Observer {

    private final Label label;
    private final Label selectedShapes;

    public StatutBar() {
        label = new Label("0 shape");
        selectedShapes = new Label("0 selected");
        this.getChildren().addAll(label, selectedShapes);
        this.setPadding(new Insets(5));
        this.setSpacing(5.0);
        this.getStyleClass().add("bottomIndicator");
    }

    @Override
    public void update(DrawingPane drawingPane) {
        int size = drawingPane.getShapes().size();
        int selectedSize = 0;
        if(size > 1)
            label.setText(size + " shapes");
        else
            label.setText(size + " shape");

        for (IShape shape : drawingPane.getShapes()){
            if(shape.isSelected()){
                selectedSize ++;
            }
        }
        selectedShapes.setText(selectedSize + " selected");
    }
}
