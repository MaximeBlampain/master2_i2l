package drawing.handlers;

import drawing.commands.MoveCommand;
import drawing.ui.DrawingPane;
import drawing.shapes.IShape;
import javafx.event.EventHandler;
import javafx.scene.input.MouseEvent;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by lewandowski on 20/12/2020.
 */
public class MouseMoveHandler implements EventHandler<MouseEvent> {

    private DrawingPane drawingPane;

    private double orgSceneX;
    private double orgSceneY;

    private double globalX;
    private double globalY;

    public MouseMoveHandler(DrawingPane drawingPane) {
        this.drawingPane = drawingPane;
        drawingPane.addEventHandler(MouseEvent.MOUSE_PRESSED, this);
        drawingPane.addEventHandler(MouseEvent.MOUSE_DRAGGED, this);
    }

    @Override
    public void handle(MouseEvent event) {
        if (event.getEventType().equals(MouseEvent.MOUSE_PRESSED)) {
            orgSceneX = event.getSceneX();
            orgSceneY = event.getSceneY();

            globalX = event.getSceneX();
            globalY = event.getSceneY();
        }

        if (event.getEventType().equals(MouseEvent.MOUSE_DRAGGED)) {
            double offsetX = event.getSceneX() - orgSceneX;
            double offsetY = event.getSceneY() - orgSceneY;

            for(IShape shape : drawingPane.getSelection())
                shape.offset(offsetX, offsetY);

            orgSceneX = event.getSceneX();
            orgSceneY = event.getSceneY();
        }

        if (event.getEventType().equals(MouseEvent.MOUSE_RELEASED)) {
            double globalOffsetX = event.getSceneX() - globalX;
            double globalOffsetY = event.getSceneY() - globalY;

            if (globalOffsetX != 0.0 && globalOffsetY != 0.0) {
                List<IShape> liste = new ArrayList<>();
                for(IShape shape: drawingPane.getSelection()) {
                    liste.add(shape);
                    shape.offset(-globalOffsetX, -globalOffsetY);
                }
                if(!liste.isEmpty())
                    drawingPane.getCommandHistory().exec(
                            new MoveCommand(liste, globalOffsetX, globalOffsetY));
            }

        }
    }
}
