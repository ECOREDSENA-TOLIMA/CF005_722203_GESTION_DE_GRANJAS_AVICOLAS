<template lang="pug">
.curso-main-container.pb-3.tema2
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Informes financieros 

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema2/img-26.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Los informes financieros buscan reflejar la situación de la empresa a una fecha determinada, para ello existen diferentes estructuras enfocadas a satisfacer las necesidades de diferentes usuarios de la información. Su periodicidad, nivel de detalle y partidas a presentar, son aspectos tan variables que pueden elaborarse a la medida para analizar problemáticas o tendencias en específico. Para dar continuidad a los temas expuestos, se propone el análisis de tres estados: de costos, de resultados y de situación financiera.  
    
    Separador 

    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2#t_1_1 2.1 Estado de costos 

    .col-12.d-flex.flex-wrap.align-items-center.p-2.mb-5
      .col-12.col-md-3.col-lg-1
        img.mb-4.mb-md-0.mx-auto(src="@/assets/curso/temas/tema2/img-27.svg" data-aos="fade-right" style="max-width: 100px")
      p.col.mb-0.col-md-9.col-lg-11.ps-lg-4(data-aos="fade-left") Un informe de costos se elabora a partir de la recopilación de la información del área de producción. El nivel de detalle se estimará según el criterio del jefe de área, de tal forma que aporte la información necesaria y suficiente para crear un criterio sustentado respecto a los procesos claves de la producción. Sin una consolidación de información correcta y oportuna, la toma de decisiones se verá comprometida. 
        br
        br
        | El ciclo de producción incluye varias fases en secuencia donde los productos terminados, y por lo tanto su costo, abandonan el inventario una vez son vendidos; el siguiente flujograma presenta cada una de las etapas: 
    
    .col-xl-8.mx-auto.mb-5
      .titulo-sexto.color-primario(data-aos="fade-right")
        h5 Figura 5.
        span <em>Proceso del costo de ventas</em>
      img.d-md-block(src="@/assets/curso/temas/tema2/img-28.svg" data-aos="fade-left")
      figcaption Nota. Figura adaptada de “Presupuestos bajo normas internacionales de información financiera y taxonomía XBRL”, p. 260.

    .col-xl-10.mx-auto.mb-5
      .cajon.color-primario.p-4.d-flex.flex-wrap.mb-5(data-aos="fade-right")
        .col-md-11.ps-lg-4
          p El estado de costos es un informe a través del cual se detallan las cifras que componen el costo de ventas, como puede apreciarse en el flujograma anterior, allí se consigna solo una porción de los costos de producción, puesto que, por su mecánica, se deduce el valor de los productos en proceso o de aquellos terminados que permanecen en el inventario. La estructura recomendada para este estado es la siguiente: 

    .col-xl-8.mx-auto.mb-5
      .titulo-sexto.color-primario(data-aos="fade-right")
        h5 Tabla 9.
        span <em>Estructura del estado de costo de ventas</em>
      img.d-md-block.mb-3(src="@/assets/curso/temas/tema2/img-29.svg" data-aos="fade-left")
      figcaption Nota. Tabla adaptada de “Presupuestos bajo normas internacionales de información financiera y taxonomía XBRL” p. 260.

    Separador 

    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2#t_1_1 2.2 Estado de resultados  

    .row.justify-content-center.align-items-center.mb-5
      .col-md-8.col-12.col-lg-7
        p Este informe contiene partidas financieras como los ingresos operacionales, el costo de ventas, los gastos administrativos y de ventas, y los demás ingresos y gastos no operativos. Como su nombre lo indica, con él se busca medir el resultado de las operaciones de la empresa, tengan o no con el objeto social con el que fue concebida.  Se encuentra relacionado con el estado de costos, puesto que este último detalla el cálculo del costo de ventas, valor que se lleva al estado de resultados para determinar la utilidad bruta de la sociedad, es decir, la ganancia resultante de los ingresos operativos menos sus costos de producción. 
        p El estado de resultados discrimina los ingresos según su relación con la actividad operacional, el costo de ventas, por otra parte, corresponde al costo de producción de los bienes o servicios vendidos. Los gastos se discriminan por función o naturaleza, según las preferencias o necesidades del emisor. Las ganancias serán el resultado de restar los costos y gastos a los ingresos de cada categoría. La utilidad neta del ejercicio contemplará el gasto por el impuesto de renta, también conocido como impuesto a las ganancias, debido que se calcula al multiplicar una tarifa por el excedente fiscal del ejercicio.  
      .col-md-4.col-12.col-lg-5
        figure
          img(src='@/assets/curso/temas/tema2/img-30.png', alt='')

    .col-xl-8.mx-auto.mb-5
      .titulo-sexto.color-primario(data-aos="fade-right")
        h5 Tabla 10.
        span <em>Estructura del estado de resultados</em>
      img.d-md-block.mb-3(src="@/assets/curso/temas/tema2/img-31.svg" data-aos="fade-left")

    Separador 

    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2#t_1_1 2.3 Estado de situación financiera 

    .col-12.d-flex.flex-wrap.align-items-center.p-2.mb-4
      .col-12.col-md-3.col-lg-1
        img.mb-4.mb-md-0.mx-auto(src="@/assets/curso/temas/tema2/img-32.svg" data-aos="fade-right" style="max-width: 100px")
      p.col.mb-0.col-md-9.col-lg-11.ps-lg-4(data-aos="fade-left") La finalidad de este informe es ofrecer al usuario de la información, una imagen de la estructura financiera de la empresa a una fecha en concreto. Las tres categorías principales del estado son el activo, el pasivo y el patrimonio, como se indica a continuación: 

    .row.justify-content-center.mt-5.mb-5(data-aos="fade-right")
      .col-3
        figure
          img(src='@/assets/curso/temas/tema2/img-33.svg', alt='')

      .col-lg-8
        LineaTiempoD.color-acento-contenido
          .row(numero="1" titulo="Activo")
            .col-auto
              p.text-small Los recursos controlados por la entidad, destinados a obtener un beneficio económico futuro, varían según la empresa. Por ejemplo, una organización dedicada a la producción priorizará su inversión sobre maquinaria y equipo, mientras que una empresa dedicada a los servicios será diferente, pues el objetivo principal, será cubrir obligaciones futuras y asegurar la operación permanente. 

          .row(numero="2" titulo="Pasivo")
            .col-auto
              p.text-small Aglomera las obligaciones adquiridas por la empresa a pagar en un periodo determinado. Su reconocimiento implica que en algún momento generaron beneficios para la compañía, por ejemplo, un crédito financiero, o una compra de mercancía financiada por el proveedor. 
              
          .row(numero="3" titulo="Patrimonio")
            .col-auto
              p.text-small Es el valor residual al tomar la totalidad de los activos y deducirle los pasivos. Incluye los aportes efectuados por los socios, así como los resultados de los ejercicios que no han sido distribuidos a los socios.

    p Para otorgar más herramientas para su análisis, los activos y pasivos pueden separarse en corrientes y no corrientes; una partida es corriente si espera realizarse (convertirse en efectivo) en periodos inferiores a un año, por ejemplo, los inventarios que se esperan vender en el corto plazo. En el caso de las cifras catalogadas como no corrientes, se espera que permanezcan en el estado de situación financiera por periodos superiores a un año como una obligación financiera que se terminará de pagar varios años después, o la maquinaria utilizada para producción. 
    p.mb-5 En el siguiente anexo, encontrará un ejemplo que da una idea de la estructura del estado de situación financiera de una empresa, su organización puede someterse a cambios de acuerdo con el criterio de su emisor, pero respetando las categorías y principios ya mencionados:  
    
    .tarjeta.color-primario.p-3.mt-3.caja_flotante_azul.col-md-9.m-auto.mb-5
      .row.justify-content-around.align-items-center
        .col-4.col-sm-2.col-lg-2
          img.p-4.imagen_flotante_animada(src="@/assets/curso/temas/tema1/descargar.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              .h4.mb-0(style="color: #FFFF") Anexo 2 - Estructura del estado de situación financiera
              p.mt-3(style="color: #FFFF") La estructura del estado de situación financiera de una empresa, es un proceso importante en la organización,  para informarse al respecto diríjase al Anexo 2 - Estructura del estado de situación financiera, en donde podrá encontrar ejemplos a éste respecto.
            .col-sm-auto
              a.boton.boton--b.color-acento-botones(:href="obtenerLink('/downloads/Anexo_2_Estructura_del_estado_de_situacion_financiera.pdf')" target="_blank")
                span(style="color: #12263F !important;") Descargar
                i.fas.fa-download(style="color: #12263F !important;")   

    Separador 

    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2#t_1_1 2.4 Presentación de estados financieros 

    .cajon-b.color-acento-botones.mt-3.mb-5
      p Las normas internacionales de información financiera para pequeñas y medianas empresas (2015) demandan una serie de requisitos a la hora de presentar los estados financieros. Entre ellos destacan los siguientes: 

    TabsA.color-primario.mb-4
      .tarjeta.color-primario--borde1.p-4(titulo="Frecuencia de la información")
        .row
          .col-md-12.col-12
            h3 Frecuencia de la información 
            p Los estados financieros serán presentados por lo menos anualmente, lo anterior sin perjuicio de la presentación de información en periodos intermedios; con respecto a esto último, deberá revelarse esta condición y la razón para presentarlos en estos intervalos de tiempo diferentes.

      .tarjeta.color-primario--borde1.p-4(titulo="Uniformidad en la presentación ")
        .row
          .col-md-12.col-12
            h3 Uniformidad en la presentación 
            p La información debe ser congruente con los principios aplicados en periodos anteriores, no pueden cambiar los criterios de clasificación a menos que exista una justificación para ello y se revele en la información complementaria. En este sentido se dará cuenta de la naturaleza de la reclasificación, la cuantía y el motivo de esta.  

      .tarjeta.color-primario--borde1.p-4(titulo="Comparabilidad ")
        .row
          .col-md-12.col-12
            h3 Comparabilidad 
            p Los estados financieros deben presentarse de forma comparativa con el periodo anterior, de tal forme que aporte un contexto adicional para su interpretación.  

      .tarjeta.color-primario--borde1.p-4(titulo="Materialidad")
        .row
          .col-md-12.col-12
            h3 Materialidad
            p Las partidas se presentarán de forma separada por cada clase si tienen importancia relativa. Se consideran materiales aquellas partidas que puedan modificar la opinión de los usuarios, ya sea por su naturaleza o por su cuantía. 

      .tarjeta.color-primario--borde1.p-4(titulo="Identificación de los estados financieros ")
        .row
          .col-md-12.col-12
            h3 Identificación de los estados financieros 
            p Deben indicar por lo menos: 
            ul.lista-ul
              li 
                i.lista-ul__vineta
                | El nombre de la empresa que informa y a la que corresponde la información. 
              li 
                i.lista-ul__vineta
                | Si pertenecen a una empresa individual o a un grupo empresarial.
              li
                i.lista-ul__vineta
                | La fecha de cierre del periodo informado o su periodo cubierto.
              li
                i.lista-ul__vineta
                | La moneda de presentación.
              li
                i.lista-ul__vineta
                | El grado de redondeo (si aplica).

    .row.justify-content-center.align-items-center.mb-5
      .col-md-10.col-lg-10.mb-4.mb-md-0(data-aos="fade-left")
        .tarjeta.color-acento-botones1.p-3
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-2
              img(src="@/assets/curso/temas/tema1/decorador-3.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0  
                  p La información complementaria se anexará como notas a los estados financieros, en ella se detallarán aquellos aspectos que la norma exija para cada tipo de partidas. Adicionalmente, en las notas deberá indicarse el domicilio de la empresa y el país donde fue constituida, así como una descripción de las operaciones de la entidad y sus principales actividades. 

    Separador 
    
    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2#t_1_1 2.5 Indicadores financieros

    .d-flex.flex-wrap.mb-5
      .col-xl-8.pe-xl-4.d-flex.flex-wrap.align-items-center.order-2.order-xl-1
        .tarjeta.color-acento-contenido.p-4.d-flex.flex-wrap(data-aos="fade-right" style="background-color:#FFDBDB")
          .col-md-11.ps-lg-4
            p.mb-0(style="color: #000") La evaluación de los informes financieros requiere un amplio conocimiento de las estructuras de capital y de la industria en la que se desenvuelve la compañía. Comprender la mecánica de las cifras también aporta más elementos de juicios para efectuar su lectura; muchos de los rubros presentados en los estados financieros se relacionan entre ellos a razón de las operaciones normales de una transacción comercial. El estandarizar estas relaciones permite crear fórmulas aplicables a los informes que permitan compararlo de manera ágil con otras empresas. 
              br
              br
              | Los indicadores financieros surgen como aquella herramienta que integra varias partidas a un análisis concreto. A través de ellos podemos medir desde otra perspectiva la liquidez de la empresa, su rentabilidad, su estabilidad o hasta su capacidad de endeudamiento. Aprender a calcularlos e interpretarlos es ideal a la hora de evaluar los resultados de una compañía, a continuación, se presentan sus categorías: 
      img.mb-4.mb-xl-0.col-xl-4.mx-auto.order-1.order-xl-2(src="@/assets/curso/temas/tema2/img-34.png" data-aos="fade-left" style="max-width: 400px")

    .col-xl-8.mx-auto.mb-5
      .titulo-sexto.color-primario(data-aos="fade-right")
        h5 Figura 6.
        span <em>Clases de indicadores financieros</em>
      img.d-md-block.mb-3(src="@/assets/curso/temas/tema2/img-35.svg" data-aos="fade-left")
  
    Separador 

    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2#t_1_1 2.6 Acciones de mejora 

    .row.mb-5.justify-content-center.align-items-center
      .col-12.col-md-6.mb-5.mb-lg-0(data-aos="fade-right")
        figure
          img(src='@/assets/curso/temas/tema2/img-36.png', alt='')  
      .col-12.col-md-6.mb-lg-0(data-aos="fade-left")
        p El análisis de los indicadores financieros puede brindar una visión más global de los procesos de la empresa y su relación con diversas áreas. La toma de decisiones del área de producción puede surgir de la interpretación de varios de los indicadores explicados, ya que con ellos se pueden integrar jefes de diferentes departamentos para apuntar a objetivos en común. 
        p Un indicador como el margen bruto de rentabilidad, relaciona los costos de producción de las unidades con los ingresos asociados a su venta. Si la razón es muy cercana a 0, eso significa que la mayor parte de los ingresos deben destinarse a la producción, dejando pocos recursos para la operación restante. Las acciones de mejora deberán ir enfocadas a reducir los costos de producción o incrementar el precio de venta, de tal forma que se incremente la proporción. Algunas de las acciones sugeridas podrían ser: 

    .tarjeta.tarjeta.color-acento-botones1.p-4.mb-5(data-aos="fade-right")
      SlyderA(tipo="b")
        .row
          .col-md-6.mb-4.mb-md-0
            h4 Efectuar estudio de mercado para estimar el impacto de un incremento del precio de venta
            p Factores como la competencia o la naturaleza del producto pueden afectar sobre la aceptación del cambio de los precios, es una opción viable únicamente si la cantidad de unidades vendidas no se ve significativamente reducida. 

          .col-md-5.px-3
            figure
              img(src='@/assets/curso/temas/tema2/img-37.png', alt='Texto que describa la imagen')

        .row
          .col-md-6.mb-4.mb-md-0
            h4 Evaluar los precios de los insumos
            p Solicitar cotizaciones a diversos proveedores aporta elementos de juicio para definir si la materia prima se está comprando a un precio competitivo. Según los niveles de producción pueden evaluarse compras a mayor escala para obtener descuentos adicionales. 

          .col-md-5.px-3
            figure
              img(src='@/assets/curso/temas/tema2/img-38.png', alt='Texto que describa la imagen')

        .row
          .col-md-6.mb-4.mb-md-0
            h4 Revisar políticas de inventario
            p El sostenimiento de las instalaciones para conservar los inventarios puede conllevar costos elevados si las existencias son muy numerosas. Esto puede redundar en arrendamientos más costosos, mayor personal para supervisar el estado del inventario o incluso incremento en servicios públicos si requieren de condiciones específicas de conservación, como refrigeración o iluminación. 

          .col-md-5.px-3
            figure
              img(src='@/assets/curso/temas/tema2/img-39.png', alt='Texto que describa la imagen')

        .row
          .col-md-6.mb-4.mb-md-0
            h4 Evaluar secuencia de actividades productivas 
            p En algunas ocasiones, una mala planeación de producción puede llevar a la ejecución ineficiente de procesos. Coordinar las tareas puede evitar recaer en tareas redundantes que impliquen doble pago de mano de obra o sobreutilización de maquinaria.

          .col-md-5.px-3
            figure
              img(src='@/assets/curso/temas/tema2/img-40.png', alt='Texto que describa la imagen')

        .row
          .col-md-6.mb-4.mb-md-0
            h4 Identificar y controlar desperdicios de producción 
            p Productos defectuosos o material sobrante inutilizable, son elementos que no se suelen cuantificar y si representan un mayor valor del costo debido al impacto que tiene sobre la eficiencia de la producción. Reducir los productos defectuosos mejorando la calidad del proceso, hará que con el mismo costo de producción se vendan más unidades. 

          .col-md-5.px-3
            figure
              img(src='@/assets/curso/temas/tema2/img-41.png', alt='Texto que describa la imagen')

    .col-12.d-flex.flex-wrap.align-items-center.p-2.mb-5
      .col-12.col-md-3.col-lg-1
        img.mb-4.mb-md-0.mx-auto(src="@/assets/curso/temas/tema2/img-42.svg" data-aos="fade-right" style="max-width: 100px")
      p.col.mb-0.col-md-9.col-lg-11.ps-lg-4(data-aos="fade-left") Bajo esta misma mecánica pueden aplicarse acciones de mejora en otros aspectos que no pertenecen a la producción, pero si se ven afectados por ella, por ejemplo, los indicadores de liquidez pueden generar una alerta, puesto que, si el capital de trabajo es muy reducido, la disponibilidad de dinero para adquirir materia prima a futuro se puede ver comprometida. La planeación de la producción debe tener presente este tipo de situaciones, donde la interrupción del proceso productivo puede ser una consecuencia de una mala gestión de otra área.
        br
        br
        | Los indicadores de endeudamiento pueden relacionarse con los de liquidez para evaluar alternativas cuando no se cuenta con el dinero suficiente para mantener la operación. Algunas acciones que integradas pueden aportar a mitigar este tipo de problemáticas son las siguientes:

    .row.justify-content-center.mb-5(data-aos="fade-down")
      .col-sm-6.col-lg-4.mb-4.mb-lg-0
        .tarjeta.color-acento-contenido3.p-4(style="height:100%")
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/curso/temas/tema2/img-43.svg', alt='Texto que describa la imagen')

          h3.text-center Acudir a financiamiento externo 
          p.text-center Solicitar productos crediticios tiene un impacto negativo en la rentabilidad debido a los intereses y demás costos de transacción, pero puede oxigenar la operación lo suficiente para adquirir productos a mejores precios ofreciendo pagos de contado.

      .col-sm-6.col-lg-4.mb-4.mb-lg-0
        .tarjeta.color-acento-contenido3.p-4
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/curso/temas/tema2/img-44.svg', alt='Texto que describa la imagen')

          h3.text-center Evaluar políticas de recaudo y de pago 
          p.text-center Postergar el impacto en la liquidez debido a ventas a crédito se produce hasta la fecha de pago. Para mejorar esta situación, se sugiere prolongar los pagos a proveedores sin afectar los precios de compra y reducir los plazos para recaudar pagos de productos vendidos sin afectar los precios de venta. Este enfoque busca equilibrar ingresos y egresos para mantener la estabilidad financiera. 

      .col-sm-6.col-lg-4.mb-4.mb-sm-0
        .tarjeta.color-acento-contenido3.p-4(style="height:100%")
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/curso/temas/tema2/img-45.svg', alt='Texto que describa la imagen')

          h3.text-center Evaluar las políticas de inversión 
          p.text-center Las inversiones en activos fijos pueden comprometer recursos actuales y futuros, pero como contraparte pueden mejorar los márgenes de rentabilidad o la capacidad de producción. Analizar los impactos puede otorgar elementos de juicio para decidir si es viable afectar la liquidez para mejorar la rentabilidad.







</template>

<script>
export default {
  name: 'Tema2',
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
