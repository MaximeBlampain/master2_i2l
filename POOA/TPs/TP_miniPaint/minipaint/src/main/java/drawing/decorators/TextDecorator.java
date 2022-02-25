package drawing.decorators;

import drawing.shapes.IShape;
import javafx.scene.layout.Pane;

import javafx.scene.shape.Shape;

public class TextDecorator implements IShape {

    Shape shape;
    String text;
    boolean isSelected;

    public TextDecorator(Shape s, String txt){
        shape = s;
        text = txt;
    }

    @Override
    public boolean isSelected() {
        return isSelected;
    }

    @Override
    public void setSelected(boolean selected) {
        isSelected = selected;
        if(selected)
            shape.getStyleClass().add("selected");
        if(!selected)
            shape.getStyleClass().remove("selected");
    }

    @Override
    public boolean isOn(double x, double y) {
        return shape.getBoundsInParent().contains(x, y);
    }

    @Override
    public void offset(double x, double y) {
        double orgTranslateX = shape == null ? 0 : shape.getTranslateX();
        double orgTranslateY = shape == null ? 0 : shape.getTranslateY();

        double newTranslateX = orgTranslateX + x;
        double newTranslateY = orgTranslateY + y;

        shape.setTranslateX(newTranslateX);
        shape.setTranslateY(newTranslateY);
    }

    @Override
    public void addShapeToPane(Pane pane) {
        pane.getChildren().add(shape);
    }

    @Override
    public void removeShapeFromPane(Pane pane) {
        pane.getChildren().remove(shape);
    }

    @Override
    public IShape clone() {
        return null;
    }
}
