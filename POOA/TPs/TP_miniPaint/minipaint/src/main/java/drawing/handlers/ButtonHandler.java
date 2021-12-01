package drawing.handlers;

import drawing.commands.ICommand;
import javafx.event.ActionEvent;
import javafx.event.EventHandler;

public class ButtonHandler implements EventHandler<ActionEvent> {

    private final ICommand command;

    public ButtonHandler(ICommand command) {
        this.command = command;
    }

    @Override
    public void handle(ActionEvent event) {
        command.execute();
    }
}
