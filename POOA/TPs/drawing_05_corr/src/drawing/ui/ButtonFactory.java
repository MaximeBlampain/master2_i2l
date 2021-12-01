package drawing.ui;

import javafx.scene.control.Button;
import javafx.scene.control.Tooltip;
import javafx.scene.image.Image;
import javafx.scene.image.ImageView;

import java.util.HashMap;

public class ButtonFactory {

    public static final String CLEAR = "Clear";
    public static final String CIRCLE = "Circle";
    public static final String RECTANGLE = "Rectangle";
    public static final String TRIANGLE = "Triangle";
    public static final String DELETE = "Delete";
    public static final String GROUP = "Group";
    public static final String UNGROUP = "Ungroup";

    private static final HashMap<String, String> images = initImagesMap();

    public static final int ICONS_ONLY = 1;
    public static final int TEXT_ONLY = 2;

    private final int style;

    private static HashMap<String,String> initImagesMap() {
        HashMap<String, String> map = new HashMap<String, String>();
        map.put(CLEAR, "resources/ic_delete_black_24dp_1x.png");
        map.put(CIRCLE, "resources/ic_panorama_fish_eye_black_24dp_1x.png");
        map.put(RECTANGLE, "resources/ic_crop_landscape_black_24dp_1x.png");
        map.put(TRIANGLE, "resources/baseline_change_history_black_24pt_1x.png");
        map.put(DELETE, "resources/ic_backspace_black_24dp_1x.png");
        map.put(GROUP, "resources/ic_format_shapes2_black_24dp_1x.png");
        map.put(UNGROUP, "resources/ic_dashboard_black_24dp_1x.png");
        return map;
    }

    public ButtonFactory(int style) {
        this.style = style;
    }

    public ButtonFactory() {
        this(TEXT_ONLY);
    }

    public Button createButton(String buttonName) {
        Button button = new Button();
        if (this.style == TEXT_ONLY) {
            button.setText(buttonName);
        }
        if (this.style == ICONS_ONLY) {
            button.setTooltip(new Tooltip(buttonName));
            button.setGraphic(new ImageView(new Image(
                    ButtonFactory.class.getClassLoader().getResourceAsStream(
                            images.get(buttonName)
                    ))));
        }
        return button;
    }
}