<template>
  <div>
    <TheHeader />
    <Nuxt />
  </div>
</template>

<script>
export default {
  head: {
    title: 'Clear the fog',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'my website description'
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  }
}
</script>