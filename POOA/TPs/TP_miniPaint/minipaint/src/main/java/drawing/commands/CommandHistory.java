package drawing.commands;

import java.util.Stack;

public class CommandHistory {
    private Stack<ICommand> undoStack;
    private Stack<ICommand> redoStack;

    public CommandHistory() {
        undoStack = new Stack<>();
        redoStack = new Stack<>();
    }

    public void exec(ICommand command) {
        undoStack.push(command);
        command.execute();
//        printUndoStack();
    }

    public void undo() {
        if (!undoStack.isEmpty()) {
            ICommand cmd = undoStack.pop();
            cmd.undo();
            redoStack.push(cmd);
//            printUndoStack();
        }
    }

    public void redo() {
        if (!redoStack.isEmpty()) {
            ICommand cmd = redoStack.pop();
            cmd.redo();
            undoStack.push(cmd);
        }
    }

    public void printUndoStack() {
        System.out.println();
        System.out.printf("│%-18s│\n", "");
        for (ICommand cmd : undoStack) {
            System.out.printf("│%-18s│\n", cmd.getClass().getSimpleName());
        }
        System.out.println("└──────────────────┘");
    }
}
