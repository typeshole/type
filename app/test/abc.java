public class Type extends Application {


  @Override
  public void start(Stage stage) throws Exception {
    Read r = new Read("a.txt");
    DynamicCanvas canvas = new DynamicCanvas(r.getCH());

    StackPane stackPane = new StackPane();
    Scene scene = new Scene(stackPane,500,500);
    stackPane.getChildren().add(canvas);
    //canvas.run2();
    // Bind canvas size to stack pane size.

    canvas.widthProperty().bind(
    stackPane.widthProperty());
    canvas.heightProperty().bind(stackPane.heightProperty());

    stage.setScene(scene);
    stage.setTitle("[ Type ]");
    stage.show();
    canvas.draw();
    canvas.draw2();
  }

  public static void main(String[] args) {
    launch(args);
  }
}