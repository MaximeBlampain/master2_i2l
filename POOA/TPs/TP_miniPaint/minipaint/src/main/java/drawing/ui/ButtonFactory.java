package drawing.ui;

import javafx.scene.control.Button;
import javafx.scene.control.ToolBar;
import javafx.scene.image.Image;
import javafx.scene.image.ImageView;

import java.io.IOException;

public class ButtonFactory {

    public static String CLONE = "Clone";
    public static String REDO = "Redo";
    public static String UNDO = "Undo";
    public static String DELETE = "Delete";
    public static String CLEAR = "Clear";
    public static String TRIANGLE = "Triangle";
    public static String CIRCLE = "Circle";
    public static String RECTANGLE = "Rectangle";
    public static String GROUP = "Group";
    public static String UNGROUP = "Ungroup";

    public static String ICONS_ONLY  = "ICONS_ONLY";
    public static String TEXT_ONLY = "TEXT_ONLY";

    public Button createButton(String buttonName, String style) throws IOException {
        Button button = null;

        if (style.equals(TEXT_ONLY)) {
            button = new Button(buttonName);
        } else if (style.equals(ICONS_ONLY)) {
            button = new Button("", new ImageView(new Image(ToolBar.class.getClassLoader().getResource("icons/" + buttonName + ".png").openStream())));
        }
        button.setId(buttonName);

        return button;
    }
}