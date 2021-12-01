package drawing.handlers;

import drawing.ui.DrawingPane;
import drawing.shapes.IShape;
import drawing.shapes.ShapeAdapter;
import javafx.scene.shape.Polygon;

public class TriangleButtonHandler extends ShapeButtonHandler {

    public TriangleButtonHandler(DrawingPane drawingPane) {
        super(drawingPane);
    }

    @Override
    protected IShape createShape() {
        double x1 = Math.min(originX, destinationX);
        double y1 = Math.min(originY, destinationY);
        double x2 = Math.max(originX, destinationX);
        double y2 = Math.min(originY, destinationY);
        double x3 = (x1 + x2) / 2;
        double y3 = Math.max(originY, destinationY);
        Polygon triangle = new Polygon();
        triangle.getPoints().addAll(x1, y1, x2, y2, x3, y3);
        triangle.getStyleClass().add("triangle");
        IShape newTriangle = new ShapeAdapter(triangle);
        return newTriangle;
    }
}
