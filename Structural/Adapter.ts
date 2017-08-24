// There is two ways to implement this pattern, using Inheritance or using Composition

/*
 * Inheritance
 */
console.log('***Inheritance***');
interface Graphic {
  drawLine();
  drawSquare();
}

class RasterGraphic {
  drawRasterLine() {
    console.log('draw line');
  }
  drawRasterSquare() {
    console.log('draw square');
  }
}
// Adapter
class RasterGraphicAdapter extends RasterGraphic implements Graphic {
  drawLine() {
    this.drawRasterLine();
  }

  drawSquare() {
    this.drawRasterSquare();
  }
}
// execute
const rasterGraphicAdapter = new RasterGraphicAdapter();
rasterGraphicAdapter.drawLine();
rasterGraphicAdapter.drawSquare();

/*
 * Composition
 */
console.log('***Composition***');
class RasterGraphicAdapterComposition implements Graphic {
  private rasterGraphic: RasterGraphic = new RasterGraphic();

  drawLine() {
    this.rasterGraphic.drawRasterLine();
  }

  drawSquare() {
    this.rasterGraphic.drawRasterSquare();
  }
}
// execute
const rasterGraphicAdapterComposition = new RasterGraphicAdapterComposition();
rasterGraphicAdapterComposition.drawLine();
rasterGraphicAdapterComposition.drawSquare();