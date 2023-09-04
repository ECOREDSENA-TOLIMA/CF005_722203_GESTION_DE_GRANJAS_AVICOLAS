<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .col-xl-10.mx-auto.mb-5
      .cajon.color-primario.p-4.d-flex.flex-wrap.mb-5(data-aos="fade-right")
        .col-md-11.ps-lg-4
          p Estimar correctamente el costo de producción de los bienes dispuestos a la venta es un elemento fundamental en la planeación y gestión administrativa de cualquier empresa. En el siguiente vídeo encontrará información relacionada con los procesos contables y financieros del sector de la avicultura: 

    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/j_tkr5-goVs" title="Procesos contables y financieros de la empresa avícola" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)










</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
