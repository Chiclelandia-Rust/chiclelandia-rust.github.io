<template>
  <div class="video-background">
    <video id="bg-video" autoplay muted loop playsinline>
      <source src="@/assets/videos/industrial_background.mp4" type="video/mp4">
    </video>
    <div class="video-overlay" />
  </div>
</template>

<style scoped>
.video-background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -100;
  overflow: hidden;
}

#bg-video {
  position: absolute;
  top: 50%;
  left: 50%;
  min-width: 100%;
  min-height: 100%;
  width: auto;
  height: auto;
  transform: translate(-50%, -50%);
  object-fit: cover;
  opacity: 0.7;
  filter: brightness(0.6) contrast(1.2) sepia(0.3);
}

.video-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(20, 15, 10, 0.65);
  z-index: -99;
}
</style>