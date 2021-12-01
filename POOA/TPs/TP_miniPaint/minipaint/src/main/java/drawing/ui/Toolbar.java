package drawing.ui;

import drawing.commands.ClearCommand;
import drawing.commands.DeleteCommand;
import drawing.commands.GroupCommand;
import drawing.commands.UngroupCommand;
import drawing.handlers.ButtonHandler;
import drawing.handlers.RectangleButtonHandler;
import drawing.handlers.EllipseButtonHandler;
import drawing.handlers.TriangleButtonHandler;
import javafx.event.ActionEvent;
import javafx.geometry.Insets;
import javafx.scene.control.Button;
import javafx.scene.layout.HBox;

import java.io.IOException;

public class Toolbar extends HBox {

    public Toolbar(DrawingPane drawingPane) throws IOException {
        ButtonFactory factory = new ButtonFactory();

        Button clearButton = factory.createButton(ButtonFactory.CLEAR, ButtonFactory.TEXT_ONLY);
        clearButton.addEventFilter(ActionEvent.ACTION, new ButtonHandler(new ClearCommand(drawingPane)));

        Button deleteButton = factory.createButton(ButtonFactory.DELETE, ButtonFactory.TEXT_ONLY);
        deleteButton.addEventFilter(ActionEvent.ACTION, new ButtonHandler(new DeleteCommand(drawingPane)));

        Button groupButton = factory.createButton(ButtonFactory.GROUP, ButtonFactory.TEXT_ONLY);
        groupButton.addEventFilter(ActionEvent.ACTION, new ButtonHandler(new GroupCommand(drawingPane)));

        Button ungroupButton = factory.createButton(ButtonFactory.UNGROUP, ButtonFactory.TEXT_ONLY);
        ungroupButton.addEventFilter(ActionEvent.ACTION, new ButtonHandler(new UngroupCommand(drawingPane)));


        Button rectangleButton = factory.createButton(ButtonFactory.RECTANGLE, ButtonFactory.TEXT_ONLY);
        rectangleButton.addEventFilter(ActionEvent.ACTION, new RectangleButtonHandler(drawingPane));

        Button circleButton = factory.createButton(ButtonFactory.CIRCLE, ButtonFactory.TEXT_ONLY);
        circleButton.addEventFilter(ActionEvent.ACTION, new EllipseButtonHandler(drawingPane));

        Button triangleButton = factory.createButton(ButtonFactory.TRIANGLE, ButtonFactory.TEXT_ONLY);
        triangleButton.addEventFilter(ActionEvent.ACTION, new TriangleButtonHandler(drawingPane));
        
        this.getChildren().addAll(
                clearButton,
                rectangleButton,
                circleButton,
                triangleButton,
                deleteButton,
                groupButton,
                ungroupButton
        );
        this.setPadding(new Insets(5));
        this.setSpacing(5.0);
        this.getStyleClass().add("toolbar");
    }
}
