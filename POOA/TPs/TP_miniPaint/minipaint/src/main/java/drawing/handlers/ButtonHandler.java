package drawing.handlers;

import drawing.commands.ICommand;
import drawing.ui.DrawingPane;
import javafx.event.ActionEvent;
import javafx.event.EventHandler;

public class ButtonHandler implements EventHandler<ActionEvent> {
    private final DrawingPane drawingPane;
    private final ICommand command;

    public ButtonHandler(DrawingPane drawingPane, ICommand command) {
        this.drawingPane = drawingPane;
        this.command = command;
    }

    @Override
    public void handle(ActionEvent event) {
        this.drawingPane.getCommandHistory().exec(command);
    }
}
