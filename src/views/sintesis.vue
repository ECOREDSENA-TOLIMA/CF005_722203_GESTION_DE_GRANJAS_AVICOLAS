<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    p.mb-5 Los procesos contables y financieros en una empresa avícola requieren tener en cuenta dos aspectos fundamentales; por un lado, lo concerniente a la producción y, por otra parte, lo correspondiente a la información financiera, esta doble mirada, posibilita el desarrollo de actividades y la permanencia en el mercado, mediante el ofrecimiento de productos de calidad. En el siguiente mapa conceptual, se ofrece un panorama general de los aspectos relacionados con éste interesante tema: 
    
    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="La síntesis del componente procesos contables y financieros de la empresa avícola nos muestra dos temas principales que son la producción y el informe financiero y sus subtemas.")
      .col-auto
        a.anexo.mb-4(:href="obtenerLink('/downloads/sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
