package fr.ulco.tpimageblampain;

import androidx.appcompat.app.AppCompatActivity;

import android.app.Activity;
import android.content.Intent;
import android.graphics.Bitmap;
import android.graphics.BitmapFactory;
import android.graphics.Color;
import android.graphics.drawable.BitmapDrawable;
import android.os.Bundle;
import android.view.View;
import android.widget.ImageView;
import android.widget.TextView;

import java.io.InputStream;

public class MainActivity extends AppCompatActivity {

    static final Integer REQUEST_CODE_IMG = 2;
    private Bitmap bm;
    private ImageView img_container;
    private TextView img_url;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        img_container = findViewById(R.id.img_container);
        img_url = findViewById(R.id.img_url);
    }

    public void onClickReverse(View view){

        Bitmap bitmap = ((BitmapDrawable)img_container.getDrawable()).getBitmap();

        if(bitmap == null) return;

        int width = bitmap.getWidth() -1;
        int height = bitmap.getHeight() -1;


        switch(view.getId()){
            case R.id.btn_hor_flip:
                for(int row_i = 0; row_i < height /2; row_i++){
                    for(int col_i = 0; col_i < width; col_i++){
                        int pixelOrigin = bitmap.getPixel(width - col_i, height - row_i);
                        int pixelDest = bitmap.getPixel(col_i, row_i);
                        bitmap.setPixel(col_i, row_i, pixelOrigin);
                        bitmap.setPixel(width - col_i, height - row_i, pixelDest);
                    }
                }
                break;
            case R.id.btn_ver_flip:
                for(int row_i = 0; row_i < height; row_i++){
                    for(int col_i = 0; col_i < width/2; col_i++){
                        int pixelOrigin = bitmap.getPixel(width - col_i, row_i);
                        int pixelDest = bitmap.getPixel(col_i, row_i);
                        bitmap.setPixel(col_i, row_i, pixelOrigin);
                        bitmap.setPixel(width - col_i, row_i, pixelDest);
                    }
                }
                break;

            default: break;
        }

        img_container.setImageBitmap(bitmap);
    }

    private Bitmap flipHorizontally(Bitmap bitmap){
        Bitmap result = null;
        int width = bitmap.getWidth();
        int height = bitmap.getHeight();
        for(int col_i = 0, col_j = width-1; col_i < width ; col_i++, col_j--){
            for(int row_i = 0, row_j = height-1 ; row_i < height ; row_i++, row_j--){
                result.setPixel(row_j, col_j, bitmap.getPixel(row_i, col_i));
            }
        }

        return result;
    }

    public void onClickUpload(View view){
        Intent intent = new Intent(Intent.ACTION_GET_CONTENT);
        intent.setType("image/*");
        startActivityForResult(intent, REQUEST_CODE_IMG);
    }

    @Override
    protected void onActivityResult(int requestCode, int resultCode, Intent intent) {
        if(requestCode == REQUEST_CODE_IMG && resultCode == Activity.RESULT_OK){
            try {
                if(bm != null){
                    bm.recycle();
                }
                BitmapFactory.Options options = new BitmapFactory.Options();
                options.inMutable = true;
                bm = BitmapFactory.decodeStream(getContentResolver().openInputStream(intent.getData()), null, options);
                img_container.setImageBitmap(bm);
                img_url.setText(intent.getDataString());
            } catch (Exception e) {
                e.printStackTrace();
            }
        }
        super.onActivityResult(requestCode, resultCode, intent);
    }
}