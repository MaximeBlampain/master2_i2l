package tpreflect.zetudiants;

import tpreflect.paquetcadeau.PaquetCadeau;

import java.util.Scanner;
import java.lang.reflect.Constructor;
import java.lang.reflect.Field;
import java.lang.reflect.Method;
import java.util.Iterator;
import java.util.Vector;

public class RunMe {

  public static void main(String[] args) {

    Vector v = new PaquetCadeau().getPaquetCadeau();

    Iterator i = v.iterator();
    while (i.hasNext()) {
      Object o = i.next();
      introspect(o);
    }
  }

  private static void introspect(Object o) {
    // fill in!
    System.out.println("\n\n############### NEW OBJECT ############ \n");
    Class myObjClass = o.getClass();
    System.out.println("\n############### CLASS ############\n");
    System.out.println(o.toString());

    System.out.println("\n############### CONSTRUCTORS ############\n");
    Constructor[] classConstructors = myObjClass.getConstructors();
    for(int i=0 ; i<classConstructors.length ; i+=1){
      System.out.println(classConstructors[i].toString());
    }
    System.out.println("\n############### FIELDS ############\n");
    Field[] objFields = myObjClass.getDeclaredFields();
    for(int i=0 ; i<objFields.length ; i+=1){
      System.out.println(objFields[i].toString());
    }
    System.out.println("\n############### METHODS ############\n");
    Method[] classMethods = myObjClass.getDeclaredMethods();
    for(int i=0 ; i<classMethods.length ; i+=1){
      System.out.println(classMethods[i].toString());
    }
    Scanner scanner = new Scanner(System.in);
    System.out.println("Souhaitez vous lancer une commande ?");

    String choice = scanner.nextLine();
    if(choice.equals("o")){
      System.out.println("quelle commande voulez vous lancer ?");
      String cmdToLaunch = scanner.nextLine();
      try{
        Method method = myObjClass.getMethod(cmdToLaunch, null);
        method.invoke(o, null);
      } catch (Exception e) {
        e.printStackTrace();
      }
    }


    System.out.println("Souhaitez vous modifier le contenu d'un field ?");

    String choiceField = scanner.nextLine();
    if(choiceField.equals("o")){
      System.out.println("quel field voulez vous modifier ?");
      String fieldToSet = scanner.nextLine();
      try{
        Field field = myObjClass.getDeclaredField(fieldToSet);
        Object fieldValue = field.get(o);
        System.out.println("Ce field possède cette valeur : ");
        System.out.println(fieldValue.toString());
        System.out.println("quel valeur souhaitez vous lui donner ?");
        String newField = scanner.nextLine();
        field.set(o, Integer.parseInt(newField));

        Object newFieldValue = field.get(o);
        System.out.println("Ce field possède désormais cette valeur : ");
        System.out.println(newFieldValue.toString());
      } catch (Exception e) {
        e.printStackTrace();
      }
    }
  }

}
