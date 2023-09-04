<template lang="pug">
.curso-main-container.pb-3.tema1
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Costos de producción 

    .row.mb-3.justify-content-center.align-items-center
      .col-12.col-md-4.mb-5.mb-lg-0(data-aos="fade-right")
        figure
          img(src='@/assets/curso/temas/tema1/img-1.png', alt='')  
      .col-12.col-md-8.mb-lg-0(data-aos="fade-left")
        .cajon-b.color-acento-botones.mt-3
          p Los costos pueden definirse como las inversiones de las que se espera una retribución en el corto plazo; la mecánica usualmente implica la adquisición de los insumos, su posterior transformación y su almacenamiento como inventario para su posterior venta.  
          p En este sentido, están estrechamente relacionados con la actividad misional de cualquier empresa y aportan material de discusión para la toma de decisiones estratégicas. Su papel es tan importante que las disciplinas contables y de gestión han dedicado mucho tiempo para diseñar sistemas de medición y clasificación que se adapten a las necesidades de cada industria o mercado. 
          p La primera distinción que debe plantearse es aquella que los separe de los gastos. Los costos implican erogaciones de capital con aplicación a futuro, se compran los insumos con la expectativa de transformarlos en productos a ser vendidos, por lo que en su definición se encuentra implícita una retribución esperada. Los gastos, por otra parte, resultan de la mecánica inversa, corresponden también a salidas de capital, pero asociadas a algún beneficio recibido previamente; por ejemplo, el pago de comisiones a un vendedor quien las recibe por la buena gestión comercial que tuvo durante el mes anterior.  

    Separador 

    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2#t_1_1 1.1. Elementos 

    .col-xl-10.mx-auto.mb-5
      .cajon.color-acento-contenido.p-4.d-flex.flex-wrap.mb-5(data-aos="fade-right")
        .col-md-11.ps-lg-4
          p Entendiendo el costo como un insumo para producir bienes o servicios, el siguiente paso es definir cuáles son los elementos que lo componen. Todo producto requiere de 3 tipos de insumos: materia prima, mano de obra, y otros costos indirectos de fabricación. A continuación, se desarrollará en mayor detalle cada uno de ellos.

    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h3#t_1_1 Materia prima 

    p Se compone de todos los materiales que se utilizan en la elaboración del producto. Son los insumos tangibles susceptibles de ser transformados en el proceso productivo; pueden clasificarse como directos o indirectos según su relevancia y relación con el producto en producción.  
    p.mb-5 Para determinar si la materia prima es directa, se puede evaluar el cumplimiento de por lo menos uno de los siguientes dos conceptos: materialidad e importancia relativa. 

    .tarjeta--container.row.mb-5(data-aos="fade-down-left") 
      .col-md.tarjeta.color-acento-contenido.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/temas/tema1/decorador-1.svg', alt='')
        h3.text-center(style="color:#000") Materialidad
        p.text-center(style="color:#000") Por materialidad se entiende el costo en relación con los materiales utilizados, o su significancia en la elaboración; en este sentido, se tienen en cuenta la valoración monetaria o su participación en el proceso productivo. Un ejemplo de ello es la tela utilizada para la confección de pantalones, donde es evidente que no solo es uno de los insumos de mayor valor monetario, sino también el que tiene mayor participación en la composición del producto terminado. 

      .col-md.tarjeta.color-acento-botones1.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/temas/tema1/decorador-2.svg', alt='')
        h3.text-center Importancia relativa 
        p.text-center La importancia relativa, por su parte, implica que, aunque el insumo no sea material, es indispensable para elaborarlo. Por ejemplo, los botones en la elaboración de camisas no son tan costosos, pero son necesarios para ponerlas a la venta.   

    p Guarnizo y Cárdenas (2015), consideran que el valor de la materia prima no solo se compone por el precio de compra de los insumos, sino que contempla otras erogaciones que se encuentran asociadas a la adquisición y disposición de esta. El costo de envío o embalaje, las pérdidas por robo u obsolescencia y el costo de almacenamiento son algunos de esos elementos que pueden catalogarse dentro del rubro de materia prima dado que su incurrencia es producto de su adquisición.   
    p.mb-5 La siguiente figura describe algunos de los elementos que pueden adicionarse al costo de la materia prima, en primer lugar, la compra en sí misma de los insumos, por otro lado, su almacenaje, que según la naturaleza del producto puede exigir requerimientos específicos. La administración, que implica el manejo de la documentación y control de los inventarios, y finalmente, las pérdidas producto de robos, daños accidentales, entre otros. 

    .col-xl-10.mx-auto.mb-5
      .titulo-sexto.color-primario(data-aos="fade-right")
        h5 Figura 1.
        span <em>Costos asociados a la materia prima</em>
      img.d-md-block.mb-3(src="@/assets/curso/temas/tema1/img-2.svg" data-aos="fade-left")
      figcaption Nota. Adaptada de Guarnizo y Cárdenas, (2015).
    
    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h3#t_1_1 Mano de obra 

    .d-flex.flex-wrap.mb-5
      .col-xl-8.pe-xl-4.d-flex.flex-wrap.align-items-center.order-2.order-xl-1
        .tarjeta.color-acento-contenido.p-4.d-flex.flex-wrap(data-aos="fade-right" style="background-color:#ABFFFF")
          .col-md-11.ps-lg-4
            p.mb-0(style="color: #000") El segundo elemento del costo comprende el trabajo efectuado por las personas involucradas en la producción y aplicado de una u otra forma en la transformación de la materia prima. Al igual que con la materia prima, puede clasificarse como mano de obra directa o indirecta. 
              br
              br
              | Para definir cómo clasificarla, debe evaluarse nuevamente la relación que tiene con el proceso productivo. En principio, aquellas personas, cuya función es trabajar directamente en la transformación de la materia prima serán considerados mano de obra directa. Por ejemplo, el operario que alimenta a las gallinas en una granja avícola. 
      img.mb-4.mb-xl-0.col-xl-4.mx-auto.order-1.order-xl-2(src="@/assets/curso/temas/tema1/img-3.png" data-aos="fade-left" style="max-width: 400px")

    .col-xl-10.mx-auto.mb-5
      .cajon-b.color-acento-botones.mt-3
        p La mano de obra indirecta incluye la remuneración de los empleados que no se involucran de forma directa con la producción, pero desarrollan tareas de apoyo o dirección en el área. Tal es el caso del director de producción, o de los vigilantes que cuidan las instalaciones donde se encuentra la maquinaria productiva. 
        p Al igual que con la materia prima, los costos de la mano de obra directa no solo incluyen la remuneración pagada al trabajador; en esta categoría deben incluirse las prestaciones sociales, las bonificaciones, los aportes parafiscales y cualquier otra erogación de dinero que esté asociada a la relación laboral.

    .row.justify-content-center.align-items-center.mb-5
      .col-md-10.col-lg-10.mb-4.mb-md-0(data-aos="fade-left")
        .tarjeta.color-acento-botones1.p-3
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-2
              img(src="@/assets/curso/temas/tema1/decorador-3.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0  
                  p Corresponde al líder del área de producción, determinar el alcance de estos costos adicionales; por ejemplo, según su criterio, podrían incluirse también los costos asociados al proceso de reclutamiento del personal operativo, los auxilios o las capacitaciones, entre otros.

    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h3#t_1_1 Costos indirectos de fabricación 

    .row.mb-3.justify-content-center.align-items-center
      .col-12.col-md-5.mb-5.mb-lg-0(data-aos="fade-right")
        figure
          img(src='@/assets/curso/temas/tema1/img-4.png', alt='')  
      .col-12.col-md-7.mb-lg-0(data-aos="fade-left")
        p Cuando se determina el costo de un producto, los elementos principales para tener en cuenta son la mano de obra y la materia prima directas. Sin embargo, existen muchos otros rubros asociados a la producción que, a pesar de no tener un vínculo directo con el producto terminado, son necesarios para llevarla a cabo. En este elemento deben incluirse todas las demás partidas que determinarán el costo final de producción de cada producto terminado.  
        .tarjeta.color-acento-contenido.p-4.d-flex.flex-wrap(data-aos="fade-right" style="background-color:#ABFFFF")
          .col-md-11.ps-lg-4
            p.mb-0(style="color: #000") Este elemento incluye una gran variedad de rubros de diversa índole que requiere diferentes sistemas para calcular su valor. La parte indirecta de la materia prima y la mano de obra son algunos de los conceptos a incluir en este, así como partidas que no se pueden asociar de forma directa a cada producto, como los arrendamientos o los mantenimientos de la maquinaria. 

    Separador 

    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2#t_1_1 1.2 Clasificación 

    p.mb-5 Teniendo claro el concepto de costo y los elementos que lo integran es posible clasificarlos según diversos criterios, los siguientes son los sistemas de clasificación de mayor aceptación: 

    .tarjeta.tarjeta--gris.p-4.mb-5
      PasosB.color-acento-contenido

        .row(titulo="Según su relación con la producción")
          .col-md-12.mb-4.mb-md-0
            p Se clasifican como costos variables, entendidos como los que sufren modificaciones con el incremento o disminución de la producción. Al ser una relación directa, puede preverse el comportamiento de estos en función de la proyección de unidades a producir, un ejemplo de ello es la madera necesaria para elaborar sillas, a mayor cantidad de sillas a producir, más madera se necesitará. Por otro lado, se encuentran los costos fijos, que no varían en función de la producción, por ejemplo, el valor del arriendo donde se ubica la fábrica siempre será el mismo se les de uso o no a la maquinaria.  

        .row(titulo="Según su relación con el producto")
          .col-md-12.mb-4.mb-md-0
            p Se clasifican como directos o indirectos. Los primeros son aquellos que se pueden asignar de forma clara e inequívoca a las unidades producidas. Si, por ejemplo, se tiene claro que la elaboración de una artesanía toma una hora de trabajo a un empleado, el costo de ese tiempo se asignará como mano de obra directa. Los costos indirectos son los que no se pueden relacionar con la producción de manera tan clara, por ejemplo, los honorarios que cobra el mecánico que repara la maquinaria utilizada en la producción o los servicios públicos de la planta.  
            
        .row(titulo="Según su uso en planeación")
          .col-md-12.mb-4.mb-md-0
            p En primer lugar, están los costos estimados, que surgen de metodologías de análisis y observación. No son exactos y su margen de error está condicionado al nivel de detalle en la que se haya efectuado los procedimientos de cálculos. Son aplicables a los insumos que no son materiales en el proceso de elaboración. En segundo lugar, se ubican los costos estándar, utilizados en empresas con volúmenes de producción significativos y bajo un sistema altamente repetitivo. Analizan la información histórica disponible, y anticipan el costo de producción a partir de ello, su margen de error suele ser muy bajo dado que trabajan con variables ya conocidas. 
    
    p.mb-5 En la siguiente figura se indican esta relación de los costos y la producción:  

    .col-xl-10.mx-auto.mb-5
      .titulo-sexto.color-primario(data-aos="fade-right")
        h5 Figura 2.
        span <em>Clasificación de los costos</em>
      img.d-md-block.mb-3(src="@/assets/curso/temas/tema1/img-5.svg" data-aos="fade-left")

    Separador 

    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2#t_1_1 1.3  Normativa contable

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/img-6.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 El registro y control de los costos de producción se lleva a cabo a través de la contabilidad. Es por ello que resulta imprescindible comprender los principios fundamentales de la contabilidad asociada a los costos para efectuar el seguimiento debido a través de los reportes financieros.  
          br
          br
          | Con la ley 1314 de 2009 “por la cual se regulan los principios y normas de contabilidad e información financiera y de aseguramiento de información aceptados en Colombia, se señalan las autoridades competentes, el procedimiento para su expedición y se determinan las entidades responsables de vigilar su cumplimiento.” 

    p El Ministerio de Hacienda y Crédito Público y el Ministerio de Comercio, Industria y Turismo, iniciaron el proceso de transición a un marco normativo contable de amplia aceptación a nivel internacional, con el objetivo de facilitar la integración económica global, e incentivar la inversión extranjera.  
    p.mb-5 Esta ley fue reglamentada posteriormente por una variedad de decretos que fueron recopilados en el decreto único reglamentario 2420 de 2015 y sus respectivos modificatorios. Allí se define que la contabilidad se regirá bajo tres estándares diferentes según las condiciones de cada empresa. 

    .col-xl-10.mx-auto.mb-5
      ul.lista-ul--color
        li 
          i.fas.fa-check
          | El grupo 1, compuesto por empresas de interés público, aplicará las Normas Internacionales de Información Financiera - NIIF. 
        li 
          i.fas.fa-check
          | El grupo 2, compuesto por empresas de capital privado que no cotizan en bolsa ni administran recursos de terceros, aplicarán las NIIF para Pequeñas y Medianas Entidades - PYMES.  
        li 
          i.fas.fa-check
          | El grupo 3, compuesto por microempresas (menos de 10 trabajadores y activos inferiores a 500 salarios mínimos mensuales legales vigentes), se regirá por un sistema de contabilidad simplificada.  

    p.mb-5 En la siguiente figura, dispone de la normatividad colombiana en materia contable: 
    
    .col-xl-10.mx-auto.mb-5
      .titulo-sexto.color-primario(data-aos="fade-right")
        h5 Figura 3.
        span <em>Normatividad contable en Colombia</em>
      img.d-md-block.mb-3(src="@/assets/curso/temas/tema1/img-7.svg" data-aos="fade-left")

    .row.mb-5.justify-content-center.align-items-center
      .col-12.col-md-5.mb-5.mb-lg-0(data-aos="fade-right")
        figure
          img(src='@/assets/curso/temas/tema1/img-8.png', alt='')  
      .col-12.col-md-7.mb-lg-0(data-aos="fade-left")
        p Comprendiendo el esquema normativo de la contabilidad en Colombia, resulta relevante remarcar que acorde al Ministerio del trabajo (2019), según cifras del Departamento Administrativo Nacional de Estadística, más del 90% del sector productivo nacional se encuentra compuesto por micros, pequeñas y medianas empresas; lo que implica que la economía en Colombia es mayoritariamente impulsada por empresas que aplican la contabilidad de los grupos 2 y 3 mencionados previamente.   
        p Los 3 modelos contables obedecen a una estructura básica financiera, por un lado, un estado de situación financiera o balance general, que comprende los bienes controlados por la empresa (activo), las deudas (pasivo) y su diferencia (patrimonio).  
        p Por otra parte, el estado de resultados, en el que se registran los ingresos generados en un periodo determinado, así como todos los costos y gastos, tengan o no relación con la actividad operacional y la generación de ingresos. La mecánica general implica que a los ingresos se le deducen los costos y gastos, si la diferencia es positiva se genera utilidad, en el caso contrario, se considera pérdida. 

    .col-xl-10.mx-auto.mb-5
      .cajon.color-primario.p-4.d-flex.flex-wrap.mb-5(data-aos="fade-right")
        .col-md-11.ps-lg-4
          p En cuanto, a la producción, todos los insumos requeridos para elaborar el producto, y el producto terminado en sí mismo, permanecerán en el inventario hasta que sean vendidos. En este sentido, es importante recalcar la diferenciación entre los costos de producción y los gastos de administración y ventas, dado que solo los primeros serán reconocidos como un activo, mientras que los demás serán llevados directamente al gasto. 
          p Los costos son considerados una inversión de la que se espera recibir beneficios económicos a futuro. Es por esto que el reconocimiento inicial afecta una cuenta del activo: 

    .col-xl-10.mx-auto.mb-5
      .titulo-sexto.color-primario(data-aos="fade-right")
        h5 Figura 4.
        span <em>Dinámica contable de los costos</em>
      img.d-md-block.mb-3(src="@/assets/curso/temas/tema1/img-9.svg" data-aos="fade-left")

    Separador 

    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2#t_1_1 1.4  Metodología de costos 
    
    .col-xl-12.mx-auto.mb-5
      .cajon.color-acento-contenido.p-4.d-flex.flex-wrap.mb-5(data-aos="fade-right")
        .col-md-11.ps-lg-4
          p Existen diferentes sistemas para determinar el costo de los bienes producidos. Estos se constituyen como herramientas de administración que intentan aproximar el valor de producción de cualquier bien o servicio lo más cercano a la realidad. Las siguientes son las metodologías de costeo más relevantes: 

    Separador 

    .row.justify-content-center.mt-5(data-aos="fade-right")
      .col-3
        figure
          img(src='@/assets/curso/temas/tema1/img-10.svg', alt='')

      .col-lg-8
        LineaTiempoD.color-acento-contenido
          .row(numero="1" titulo="Costo basado en actividades (ABC por sus siglas en inglés)")
            .col-auto
              p.text-small El enfoque de este modelo se centra en las actividades y no en los productos. Así pues, el punto de partida no será el bien elaborado, sino al cómo se producen; en este sentido, los bienes requieren de actividades para elaborarse, y son esas últimas a las que se les asigna el costo. 
              p.text-small Al centrarse en las actividades, permite identificar aquellas labores que no aportan al proceso, permitiendo perfecciones en el ciclo productivo. Su implementación no suele ser complicada debido a que su filosofía apunta al reconocimiento de la totalidad de los costos que vayan a ser relacionados a la producción.  

          .row(numero="2" titulo="Costeo por absorción")
            .col-auto
              p.text-small Es uno de los modelos más tradicionales. Bajo este esquema, todos los costos asociados a la producción deben cargarse directamente al producto, sin entrar a distinguir entre los costos normales y los no normales; por ejemplo, se termina cargando en el costo del producto el desperdicio de material, la improductividad de la mano de obra o la no utilización plena de la planta.  
              p.text-small Es un modelo muy sencillo de aplicar, así que su programación y desarrollo suele requerir menos recursos, pero el costo asignado al producto puede variar entre periodos según el nivel de producción, lo que dificulta el análisis. 
              
          .row(numero="3" titulo="Costeo variable")
            .col-auto
              p.text-small Surge como solución a las problemáticas del costeo por absorción, puesto que solo los costos variables se asocian a la producción. Así, los insumos que varían según la cantidad de unidades producidas se llevan como mayor valor del costo, mientras que los costos fijos de la planta se reconocen como un gasto y por lo tanto no se le cargan al producto.  
              p.text-small Es el sistema más sencillo de implementar, pero al menospreciar una cantidad significativa de costos asociados a la producción, no aporta información lo suficientemente precisa para apoyar la toma de decisiones. 
              
          .row(numero="4" titulo="Costeo estándar")
            .col-auto
              p.text-small Es el sistema más complejo, ya que trata de prever el costo del producto con anticipación. Para ello, contempla factores como las unidades producidas por hora según el fabricante de la maquinaria, o las unidades elaboradas por cada operario. Una vez se calculan unos promedios aceptables para la administración, se estima la producción normalizada, es decir la cantidad de unidades a producir en un periodo de tiempo según la capacidad de la planta. 
              p.text-small Es el modelo más preciso dado que contempla todos los factores relevantes a la hora de estimar el costo de producción de un bien, pero su implementación resulta bastante compleja. Es ideal para líneas de producción que no sufren variaciones significativas en el tiempo, dado que cualquier cambio implicará volver a estimar el costo estándar de cada producto. 

    Separador 

    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2#t_1_1 1.5 Cálculo 

    p.mb-5 Previamente se describieron los tres elementos del costo de producción, así como aquellas características o condiciones que permiten clasificar cada insumo como uno de ellos. Ahora bien, una vez se tiene claridad de su naturaleza, el siguiente paso consiste en estimar su costo según los procedimientos técnicos recomendados.

    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h3#t_1_1 Materia prima 

    p.mb-4 La estimación del costo de la materia prima debe comprender la inclusión de todas aquellas erogaciones asociadas con la adquisición y puesta en disposición de los materiales para ser utilizados. Los sistemas utilizados para la valoración de inventarios en Colombia son el periódico y el permanente. 

    .row.justify-content-center.align-items-center.mb-4
      .col-12(data-aos="fade-right")
        ul.lista-ul.mb-2
          li.mb-0
            i.fas.fa-play(style="color:#25FFFF")
            | Sistema de inventarios periódico

    .row.mb-5(data-aos="fade-down-left")
      .col-12.col-md-9.col-lg-10
        p.mb-3 Según este modelo, el costo de la materia prima se determina en periodos de tiempo específicos, a través del conteo físico de las unidades que no se han utilizado o vendido, es decir, el inventario final. Para efectuar el cálculo se requiere del uso de una fórmula conocida como el juego de inventarios: 

      .col-12.col-md-3.col-lg-2 
        figure
          img(src='@/assets/curso/temas/tema1/img-11.svg', alt='')

    .row.mb-5.justify-content-center.align-items-center
      .col-12.col-md-4.mb-5.mb-lg-0(data-aos="fade-right")
        figure
          img(src='@/assets/curso/temas/tema1/img-12.png', alt='')  
      .col-12.col-md-7.mb-lg-0(data-aos="fade-left")
        p Este sistema suele ser utilizado en la empresa con una muy baja inversión en tecnología puesto que las herramientas actuales brindan cada vez más herramientas para utilizar el sistema permanente. Debido a su naturaleza periódica, el cálculo de la materia prima solo se reconoce al finalizar el periodo, por lo que se puede ver comprometida la toma de decisiones.
        p Por ejemplo, una panadería debe comprar los ingredientes para llevar a cabo la producción de los diferentes tipos de pan y galletería que ofrece; con una toma de inventario físico a cierre de un año, tendrá claridad sobre la materia prima final de dicho año y la inicial del siguiente. Aplicando la fórmula descrita, podría definir cuánta harina utilizó en el año, tomando de base la que tenía al empezar el año, sumando la que compró y restando las existencias sin utilizar que quedarán para utilizar el año siguiente.  

    .row.justify-content-center.align-items-center.mb-5
      .col-md-10.col-lg-10.mb-4.mb-md-0(data-aos="fade-left")
        .tarjeta.color-acento-botones1.p-3
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-2
              img(src="@/assets/curso/temas/tema1/decorador-3.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0  
                  p De lo anterior se deduce un elemento importante de este sistema, y es que el conteo físico de los inventarios es necesario para cuantificar los costos, por lo que la oportunidad de la información estará supeditada a esta actividad; determinar el costo de manera periódica requiere de tomas físicas de inventarios con la misma periodicidad.
    
    .row.justify-content-center.align-items-center.mb-4
      .col-12(data-aos="fade-right")
        ul.lista-ul.mb-2
          li.mb-0
            i.fas.fa-play(style="color:#25FFFF")
            | Sistema de inventarios permanente 

    p.mb-5 Haciendo uso de este modelo, es posible conocer el valor de la materia prima en cualquier momento. Para ello, es posible hacer uso de diversos sistemas: 

    .row.justify-content-center.mb-4(data-aos="fade-right")
      .col-lg-10
        ImagenInfografica.color-acento-botones.mb-0.desktop
          template(v-slot:imagen)
            figure(data-aos="flip-up")
              img(src="@/assets/curso/temas/tema1/img-13-1.svg" data-aos="zoom-in-up"  alt="")

          .tarjeta.color-primario1.p-3(x="71.5%" y="23%" numero="1")
            p.mb-0 Las unidades de materia prima adquiridas serán dispuestas en la producción en el mismo orden que fueron adquiridas. Así, los saldos de inventario estarán compuestos por las últimas unidades compradas. 

          .tarjeta.color-acento-botones-2.p-3(x="24%" y="51%" numero="2")
            p.mb-0 Funciona de manera opuesta al anterior, dado que la materia prima utilizada será la más recientemente adquirida. Esto implica que el inventario final estará compuesto por el costo de la materia prima comprada con mayor antigüedad. 

          .tarjeta.color-acento-contenido3.p-3(x="71%" y="78.5%" numero="3")
            p(style="color:#000") Bajo este modelo, la materia prima se costea de tal forma que todas las compras afectan el costo de todas las unidades. Es decir, que las variaciones en los precios de compra ajustan todas las existencias presentes en el inventario. Y hace que el valor arrojado, sea un promedio entre los dos sistemas anteriores, no solo para la materia prima utilizada sino también, para el inventario final. 

    .row.justify-content-center.mb-4(data-aos="fade-right")
      .col-lg-10
        ImagenInfografica.color-acento-botones.mb-0.movil
          template(v-slot:imagen)
            figure(data-aos="flip-up")
              img(src="@/assets/curso/temas/tema1/img-13-2.svg" data-aos="zoom-in-up" alt="")  

          .tarjeta.color-primario1.p-3(x="75%" y="20%" numero="1")
            p.mb-0 Las unidades de materia prima adquiridas serán dispuestas en la producción en el mismo orden que fueron adquiridas. Así, los saldos de inventario estarán compuestos por las últimas unidades compradas. 

          .tarjeta.color-acento-botones-2.p-3(x="15%" y="51%" numero="2")
            p.mb-0 Funciona de manera opuesta al anterior, dado que la materia prima utilizada será la más recientemente adquirida. Esto implica que el inventario final estará compuesto por el costo de la materia prima comprada con mayor antigüedad. 

          .tarjeta.color-acento-contenido3.p-3(x="74%" y="81%" numero="3")
            p(style="color:#000") Bajo este modelo, la materia prima se costea de tal forma que todas las compras afectan el costo de todas las unidades. Es decir, que las variaciones en los precios de compra ajustan todas las existencias presentes en el inventario. Y hace que el valor arrojado, sea un promedio entre los dos sistemas anteriores, no solo para la materia prima utilizada sino también, para el inventario final. 

    p.mb-5 La legislación aplicable en Colombia limita las opciones al PEPS y al promedio ponderado dado que son aquellos que más aproximan el costo de la materia prima a la realidad.  Existen diversos argumentos para cuestionar el uso del sistema UEPS, por ejemplo, en industrias donde la materia prima es perecedera, no tiene sentido utilizar las últimas unidades adquiridas y dejar rezagadas aquellas compradas inicialmente, además, la tendencia más normal es que los costos de los insumos incrementen con el paso del tiempo debido a la inflación, por lo que se podría estar infravalorando el costo real de los inventarios. 

    .col-xl-10.mx-auto.mb-5
      .cajon.color-primario.p-4.d-flex.flex-wrap.mb-5(data-aos="fade-right")
        .col-md-11.ps-lg-4
          p Para hacer uso de cualquiera de los sistemas descritos, es necesario disponer de una hoja de trabajo conocida como kárdex; en ella, se computan las compras efectuadas por cada tipo de materia prima en orden cronológico, y de esta misma forma se les da salida cuando son utilizadas en el proceso de producción. A continuación, se presentan dos hojas de kárdex, una diligenciada bajo la metodología PEPS y otra bajo promedio ponderado. 
          p Ejemplo: una empresa cuenta con 30 unidades de material a cierre de febrero, con un valor unitario de $10.000. El 3 de marzo compran 15 unidades a 13.000 y el 12 de marzo 25 unidades a 15.000. Posteriormente, se efectúan dos pedidos para producción, la orden 11 por 20 unidades y la 12 por 18.  

    .tarjeta.color-primario.p-3.mt-3.caja_flotante_azul.col-md-9.m-auto.mb-5
      .row.justify-content-around.align-items-center
        .col-4.col-sm-2.col-lg-2
          img.p-4.imagen_flotante_animada(src="@/assets/curso/temas/tema1/descargar.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              .h4.mb-0(style="color: #FFFF") Anexo 1 - Hoja de kárdex.
              p.mt-3(style="color: #FFFF") Se determina el inventario final y el costo de la materia prima a través de los dos sistemas, para informarse al respecto diríjase al Anexo 1 - Hoja de kárdex, en donde podrá encontrar ejemplos al respecto.
            .col-sm-auto
              a.boton.boton--b.color-acento-botones(href="https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=76745" target="_blank")
                span(style="color: #12263F !important;") Descargar
                i.fas.fa-download(style="color: #12263F !important;")

    p.mb-5 Al interpretar las dos tablas se evidencian diferencias en la valoración de la materia prima a pesar de registrar las mismas transacciones. Si se comparan los datos se evidencia como el total de la mercancía es equivalente, pero destinando valores diferentes a las órdenes. La elección de uno u otro dependerá de las necesidades de la empresa. Pese a las divergencias ambos sistemas abordan el costeo de una manera correcta: 
    
    .col-xl-8.mx-auto.mb-5
      .titulo-sexto.color-primario(data-aos="fade-right")
        h5 Tabla 1.
        span <em>Comparativa sistemas de valuación de inventario </em>
      img.d-md-block.mb-3(src="@/assets/curso/temas/tema1/img-14.svg" data-aos="fade-left")

    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h3#t_1_1 Mano de obra 

    p.mb-5 Para determinar el costo de la mano de obra se deben tener presentes los lineamientos de la normatividad laboral en Colombia. Un contrato de trabajo se compone por un salario básico, unas prestaciones sociales, unos aportes parafiscales y de seguridad social, y todas las demás retribuciones que se le ofrezcan al empleado.  

    .row.justify-content-center.align-items-center.mb-5
      .col-md-10.col-lg-10.mb-4.mb-md-0(data-aos="fade-left")
        .tarjeta.color-acento-botones1.p-3
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-2
              img(src="@/assets/curso/temas/tema1/decorador-3.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0  
                  p El código sustantivo del trabajo de 1950 junto a sus modificatorios son el compendio de normativa laboral más importante en Colombia, allí se consignan los fundamentos legislativos que rigen cualquier contrato de trabajo.

    .row.justify-content-center.align-items-center.mb-4
      .col-12(data-aos="fade-right")
        ul.lista-ul.mb-2
          li.mb-0
            i.fas.fa-play(style="color:#25FFFF")
            | Salario 

    p.mb-5 Constituye salario no sólo la remuneración ordinaria, fija o variable, sino todo lo que recibe el trabajador en dinero o en especie como contraprestación directa del servicio, sea cualquiera la forma o denominación que se adopte, como primas, sobresueldos, bonificaciones habituales, valor del trabajo suplementario o de las horas extras, valor del trabajo en días de descanso obligatorio, porcentajes sobre ventas y comisiones. (Código Sustantivo del Trabajo, 1950, Artículo 127). Se considera: 

    TabsA.color-primario.mb-4
      .tarjeta.color-primario--borde1.p-4(titulo="Horas extra")
        .row
          .col-md-12.col-12
            h3 Horas extra 
            p Trabajo suplementario o de horas extras es el que excede de la jornada ordinaria, y en todo caso el que excede de la máxima legal. (Código Sustantivo del Trabajo, 1950, Artículo 159). 

      .tarjeta.color-primario--borde1.p-4(titulo="Vacaciones")
        .row
          .col-md-12.col-12
            h3 Vacaciones
            p Los trabajadores que hubieren prestado sus servicios durante un año tienen derecho a quince (15) días hábiles consecutivos de vacaciones remuneradas. (Código Sustantivo del Trabajo, 1950, Artículo 186). 

      .tarjeta.color-primario--borde1.p-4(titulo="Cesantías")
        .row
          .col-md-12.col-12
            h3 Cesantías 
            p Todo empleador está obligado a pagar a sus trabajadores, y a las demás personas que se indican en este Capítulo, al terminar el contrato de trabajo, como auxilio de cesantía, un mes de salario por cada año de servicios y proporcionalmente por fracción de año. (Código Sustantivo del Trabajo, 1950, Artículo 249). 
      
      .tarjeta.color-primario--borde1.p-4(titulo="Prima de servicios ")
        .row
          .col-md-12.col-12
            h3 Prima de servicios 
            p El empleador está obligado a pagar a su empleado o empleados, la prestación social denominada prima de servicios que corresponderá a 30 días de salario por año, el cual se reconocerá en dos pagos, así: la mitad máximo el 30 de junio y la otra mitad a más tardar los primeros veinte días de diciembre. Su reconocimiento se hará por todo el semestre trabajado o proporcionalmente al tiempo trabajado. (Código Sustantivo del Trabajo, 1950, Artículo 306). 
    
      .tarjeta.color-primario--borde1.p-4(titulo="Intereses a las cesantías ")
        .row
          .col-md-12.col-12
            h3 Intereses a las cesantías 
            p Todo empleador obligado a pagar cesantía a sus trabajadores conforme al Capítulo VII Título VIII, Parte 1ª, del Código Sustantivo del Trabajo y demás disposiciones concordantes, les reconocerá y pagará intereses del 12% anual sobre los saldos que, en 31 de diciembre de cada año, o en las fechas de retiro del trabajador o de liquidación parcial de cesantía, tenga este a su favor por concepto de cesantía. (Ley 52, 1975, Artículo 1). 

      .tarjeta.color-primario--borde1.p-4(titulo="Auxilio de transporte ")
        .row
          .col-md-12.col-12
            h3 Auxilio de transporte 
            p Corresponde a un elemento salarial diferente a los anteriores, puesto que su valor no depende del salario, sino que se establece un valor fijo anualmente. Como su nombre lo indica, es un auxilio para cubrir los costos de desplazamiento del empleado. Para el año 2021 su valor es de $ 106.454 según lo dispuesto en el decreto 1785 de 2020, expedido por el ministerio del trabajo, y su pago es exclusivo de los trabajadores que devenguen menos de dos salarios mínimos mensuales legales vigentes (SMMLV). 

    .tarjeta.color-primario.p-3.mt-3.caja_flotante_azul.col-md-9.m-auto.mb-5
      .row.justify-content-around.align-items-center
        .col-4.col-sm-2.col-lg-2
          img.p-4.imagen_flotante_animada(src="@/assets/curso/temas/tema1/web.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              .h4.mb-0(style="color: #FFFF") Código sustantivo del trabajo 
              p.mt-3(style="color: #FFFF") Para profundizar en los demás artículos contemplados en el Código Sustantivo del Trabajo se recomienda consultar la página web del Sistema Único de Información Normativa.
            .col-sm-auto
              a.boton.boton--b.color-acento-botones(href="https://www.suin-juriscol.gov.co/viewDocument.asp?ruta=Codigo/30019323" target="_blank")
                span(style="color: #12263F !important;") Ir al sitio web
                i.fas.fa-link(style="color: #12263F !important;")

    .cajon-b.color-acento-botones.mt-3.mb-5
      p Para definir cómo calcular el costo de los factores anteriores, es necesario considerar el tiempo necesario para hacerse acreedor a ellos. La prima y las cesantías corresponden a un mes de salario por cada año trabajado, por lo que puede calcularse una proporcionalidad de 1/12, o lo que es equivalente, el 8,33 %. Las vacaciones, por su parte, corresponden a una quincena por año trabajado, por lo que su proporción será del 4,17%. Lo anterior significa que cada mes, el empleado se hará beneficiario de unas prestaciones equivalentes a esa porción del salario. La siguiente tabla consolida lo descrito previamente:  

    .col-xl-8.mx-auto.mb-5
      .titulo-sexto.color-primario(data-aos="fade-right")
        h5 Tabla 2.
        span <em>Factores prestacionales</em>
      img.d-md-block.mb-3(src="@/assets/curso/temas/tema1/img-15.svg" data-aos="fade-left")

    p.mb-5 Adicional a los elementos anteriores, los contratos laborales también acarrean pagos asociados a la seguridad social, el Ministerio del Trabajo publicó en su artículo “Cotización a la Seguridad Social – Aportes” la siguiente tabla, respecto a dichas contribuciones. 

    .col-xl-8.mx-auto.mb-5
      .titulo-sexto.color-primario(data-aos="fade-right")
        h5 Tabla 3.
        span <em>Aportes obligatorios a seguridad social</em>
      img.d-md-block.mb-3(src="@/assets/curso/temas/tema1/img-16.svg" data-aos="fade-left")
      figcaption Nota. Tomado de “Cotización a la Seguridad Social - Aportes” Ministerio del Trabajo. (2019). 

    .col-12.d-flex.flex-wrap.align-items-center.p-2.mb-4
      .col-12.col-md-3.col-lg-1
        img.mb-4.mb-md-0.mx-auto(src="@/assets/curso/temas/tema1/img-17.svg" data-aos="fade-right" style="max-width: 100px")
      p.col.mb-0.col-md-9.col-lg-11.ps-lg-4(data-aos="fade-left") El estatuto tributario indica en su artículo 114-1 que las personas jurídicas contribuyentes del impuesto de renta se encuentran exonerados del aporte del 8,5 % por concepto de salud, así como de los aportes parafiscales al SENA (2%) e ICBF (3%) correspondientes a los empleados que ganen menos de 10 SMMLV. Para el caso de las personas naturales empleadoras, este beneficio aplicará solo si cuentan con dos o más trabajadores. 
        br
        br
        | La liquidación de los pagos a los empleados suele consolidarse en una hoja de trabajo conocida como nómina. En ella se detallan todos los pagos y deducciones asociados a cada trabajador y a partir de esta información es posible asignar el costo de mano de obra dependiendo del tiempo estimado que cada empleado le designe a la transformación del producto. 
    
    .col-xl-8.mx-auto.mb-5
      .tarjeta.color-acento-contenido.p-4.d-flex.flex-wrap(data-aos="fade-right" style="background-color:#FFDBDB")
        .col-md-11.ps-lg-4
          p(style="color: #000") Para ilustrar lo anterior, se plantea el siguiente ejemplo: calcular el costo de mano de obra de un producto que requiere 1 hora de trabajo de los siguientes dos operarios: 
          p(style="color: #000") Operario 1:  salario básico de 1.000.000 
          p(style="color: #000") Operario 2:  salario básico de 1.500.000 

    .col-xl-8.mx-auto.mb-5
      .titulo-sexto.color-primario(data-aos="fade-right")
        h5 Tabla 4.
        span <em>Liquidación costo mensual empleado</em>
      img.d-md-block.mb-3(src="@/assets/curso/temas/tema1/img-18.svg" data-aos="fade-left")

    .cajon-b.color-acento-contenido.mt-3.mb-5
      p Para precisar, la base para las prestaciones sociales incluye el salario, el auxilio de transporte, las comisiones, las horas extra, entre otros. Sin embargo, el auxilio de transporte no se incluye en la base de cálculo de las vacaciones, puesto que se supone que en ese periodo el empleado no se transportará a la empresa.  
      p La tarifa para la administradora de riesgos laborales (ARL) varía según el nivel de riesgo que asume el empleado para desempeñar su labor. La tarifa para riesgo 1 es del 0,52 %. 

    .row.justify-content-center.align-items-center.mb-5
      .col-md-10.col-lg-10.mb-4.mb-md-0(data-aos="fade-left")
        .tarjeta.color-acento-botones1.p-3
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-2
              img(src="@/assets/curso/temas/tema1/decorador-3.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0  
                  p Estos cálculos pueden automatizarse haciendo uso de hojas de cálculo; en ellas pueden agregarse tantos empleados como se desee, siempre y cuando se parametricen de forma adecuada las tarifas y montos. Existen softwares gerenciales o contables que cuentan con módulos específicos de nómina, pero requieren de compra de licencias vitalicias o suscripciones periódicas, por lo que son recomendables cuando la empresa cuenta con la rentabilidad necesaria para asumir este nuevo costo.

    .tarjeta.color-primario.p-3.mt-3.caja_flotante_azul.col-md-9.m-auto.mb-5
      .row.justify-content-around.align-items-center
        .col-4.col-sm-2.col-lg-2
          img.p-4.imagen_flotante_animada(src="@/assets/curso/temas/tema1/video.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              .h4.mb-0(style="color: #FFFF") Liquidación de nómina 
              p.mt-3(style="color: #FFFF") Para profundizar sobre la forma de automatizar la liquidación de la nómina de forma gratuita se recomienda estudiar sobre tutoriales como el siguiente: 
            .col-sm-auto
              a.boton.boton--b.color-acento-botones(href="https://www.youtube.com/watch?v=KdZLNPyLGmk" target="_blank")
                span(style="color: #12263F !important;") Ir al sitio web
                i.fas.fa-link(style="color: #12263F !important;")

    p.mb-5 Una vez definido el costo mensual de cada empleado, se debe calcular la proporción que le corresponde a cada unidad producida. Si cada empleado tarda una hora aportando su trabajo en el proceso de transformación, y trabaja 24 días al mes en jornadas de 8 horas, el costo de la mano de obra se calcularía así: 

    .col-xl-8.mx-auto.mb-5
      .titulo-sexto.color-primario(data-aos="fade-right")
        h5 Tabla 5.
        span <em>Costo de mano de obra por hora</em>
      img.d-md-block.mb-3(src="@/assets/curso/temas/tema1/img-19.svg" data-aos="fade-left")

    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h3#t_1_1 Costos indirectos de fabricación 

    .row.mb-5.justify-content-center.align-items-center
      .col-12.col-md-6.mb-5.mb-lg-0(data-aos="fade-right")
        figure
          img(src='@/assets/curso/temas/tema1/img-20.png', alt='')  
      .col-12.col-md-6.mb-lg-0(data-aos="fade-left")
        p Asignar los costos indirectos requiere de un juicio claro para determinar, en primera medida, si efectivamente corresponden a la producción, y, en segundo lugar, a qué línea productiva. Si se fabrica varios productos en cantidades variadas, es necesario definir cuánto de cada costo indirecto corresponde a cada tipo de producto según diversos elementos de juicio, posteriormente, solo restará distribuir de manera proporcional según las unidades producidas. 
        p El criterio para definir cuánto de costo corresponde a una línea de producción o área funcional de la fábrica dependerá del juicio del jefe de producción. En el caso del costeo por órdenes, pueden asignarse la cantidad de materiales utilizados o las horas de trabajo destinadas en el mes, y con ello determinar las proporciones. Cuando se utiliza un modelo de costeo estándar, donde se cuenta con una programación estimada, pueden usarse dichas proyecciones en función de unidades producidas. 
        p Para ilustrar lo anterior, se presenta el siguiente ejemplo: 

    .col-xl-8.mx-auto.mb-5
      .titulo-sexto.color-primario(data-aos="fade-right")
        h5 Tabla 6.
        span <em>Costos indirectos de fabricación mensuales</em>
      img.d-md-block.mb-3(src="@/assets/curso/temas/tema1/img-21.svg" data-aos="fade-left")

    p.mb-5 Las unidades producidas requirieron de diferente cantidad de tiempo de trabajo por los dos operarios que se presentaron en el caso de la mano de obra así: 

    .col-xl-8.mx-auto.mb-5
      .titulo-sexto.color-primario(data-aos="fade-right")
        h5 Tabla 7.
        span <em>Hoja de producción con horas de trabajo</em>
      img.d-md-block.mb-3(src="@/assets/curso/temas/tema1/img-22.svg" data-aos="fade-left")

    p.mb-5 Para definir los costos indirectos de fabricación de cada línea, será necesario prorratear en base a las horas de trabajo destinadas a cada línea de producto, posteriormente, y en función de las unidades elaboradas, se podrá definir el costo indirecto de fabricación unitario para cada tipo de producto. 

    .col-xl-8.mx-auto.mb-5
      .titulo-sexto.color-primario(data-aos="fade-right")
        h5 Tabla 8.
        span <em>Asignación de costos indirectos de fabricación</em>
      img.d-md-block.mb-3(src="@/assets/curso/temas/tema1/img-23.svg" data-aos="fade-left")

    p.mb-5 Una vez son definidos los costos unitarios de materia prima, mano de obra y costos indirectos de fabricación solo resta consolidarlos en una orden de producción para establecer el valor total que cuesta producirlos.  

    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h3#t_1_1 Aplicativos informáticos 

    .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/img-24.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Existe una amplia variedad de herramientas para llevar control sobre el cálculo y los registros de los costos de producción; aquellas microempresas que no tienen procesos productivos muy complejos pueden apoyarse con hojas de cálculo para llevar a cabo las operaciones más repetitivas o estandarizadas.
          br
          br
          | Previamente se compartió un tutorial para liquidar la nómina de manera asistida haciendo uso de una hoja de cálculo, de esta misma forma es posible llevar a cabo los kárdex para mantener el control de los inventarios bajo los sistemas explicados.

    .tarjeta.color-primario.p-3.mt-3.caja_flotante_azul.col-md-9.m-auto.mb-5
      .row.justify-content-around.align-items-center
        .col-4.col-sm-2.col-lg-2
          img.p-4.imagen_flotante_animada(src="@/assets/curso/temas/tema1/video.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              .h4.mb-0(style="color: #FFFF") Ejercicio de kárdex con promedio ponderado  
              p.mt-3(style="color: #FFFF") Para profundizar sobre los kárdex se recomienda ver el siguiente video tutorial para hacer uso del modelo de promedio ponderado
            .col-sm-auto
              a.boton.boton--b.color-acento-botones(href="https://www.youtube.com/watch?v=xYpt2IRFfgQ" target="_blank")
                span(style="color: #12263F !important;") Ir al sitio web
                i.fas.fa-link(style="color: #12263F !important;")

    .row.justify-content-center.align-items-center.mb-5
      .col-md-8.col-12.col-lg-9
        p Existen programas especializados para integrar todos los sistemas de costeo, sin embargo, su costo suele incrementarse según su complejidad. Aplicativos que abordan varias funcionalidades suelen ser conocidos como sistemas integrados de gestión, funcionan bajo un modelo modular donde existen diversas interfaces o plantillas para llevar a cabo actividades variadas. Así, un módulo de cartera hace seguimiento a las cuentas por cobrar, y un módulo de caja lleva control del efectivo con sus entradas y salidas. Toda la información converge en la contabilidad, a través de la cual se pueden analizar las dinámicas entre cuentas. 
        p Este tipo de sistemas suelen ser costosos debido a la multitud de servicios que ofrecen bajo un mismo paquete. Alternativas más económicas implican mayor simplicidad en sus funciones, una de las más populares es la de programas contables, que permiten registrar los documentos en la contabilidad, pero carecen de opciones amigables para no contadores.
      .col-md-4.col-12.col-lg-3
        figure
          img(src='@/assets/curso/temas/tema1/img-25.png', alt='')

    .col-xl-10.mx-auto.mb-5
      .cajon.color-acento-contenido.p-4.d-flex.flex-wrap.mb-5(data-aos="fade-right")
        .col-md-11.ps-lg-4
          p Los programas contables usualmente ofrecen sistemas de control de existencias de inventarios compatibles con lo estudiado hasta ahora, pero carecen de funcionalidades más específicas como el cálculo de los costos indirectos de fabricación. Algunos de ellos ofrecen la posibilidad de liquidar las nóminas de manera asistida, tras el registro de datos básicos para efectuar los cálculos correspondientes.  
            br
            br
            | El paso de hojas de cálculo a sistemas contables básicos es un paso recurrente en la formalización de los registros en cualquier empresa en crecimiento. El principal factor limitante en este sentido es el costo de implementación de cualquier aplicativo de pago. Es por ello que a día de hoy existen modalidades para hacerse con una herramienta de este estilo, las más comunes son las siguientes: 

    TabsB.color-primario.mb-5
      .py-4.py-md-5.px-5(titulo="Licencia vitalicia")
        .row
          .col-md-12.mb-4.mb-md-0
            p Se paga la licencia de uso una única vez y con ella se puede utilizar el software de manera permanente, usualmente ofrecen anualidades para actualizar de acuerdo a las novedades normativas o implementación de nuevas características. Este modelo implica un gasto significativo en el corto plazo, pero que resulta más económico en el largo plazo. 

      .py-4.py-md-5.px-5(titulo="Sistema de suscripción")
        .row
          .col-md-12.mb-4.mb-md-0
            p Los aplicativos que se utilizan a través de navegador usualmente ofrecen una alternativa que no representa erogaciones significativas en un periodo determinado. Funcionan bajo la modalidad de suscripción por lo que se cancelan mensualidades con las que se otorgan permisos de uso por tiempo limitado. Son una opción amigable en el corto plazo, pero resultan costosas si se extiende su uso por periodos largos de tiempo.  

      .py-4.py-md-5.px-5(titulo="Versiones <em>“demo”</em> o de licencia estudiantil")
        .row
          .col-md-12.mb-4.mb-md-0
            p Algunos programas otorgan acceso a funcionalidades limitadas para comprender su funcionamiento o llevar a cabo tareas muy concretas. Usualmente emiten informes con marcas de agua para evitar su uso comercial. Esta metodología es recomendable cuando no se tiene certeza de si el software se adapta a las necesidades de la empresa. 

      










      
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
