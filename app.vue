<template>
	<div class="antialiased">

		<div class="video-background">
			<video id="bg-video" autoplay muted loop playsinline>
				<source src="assets/videos/industrial_background.mp4" type="video/mp4">
			</video>
			<div class="video-overlay" />
		</div>

		<!-- Header -->
		<header class="rust-header fixed w-full z-50">
			<div class="container mx-auto px-4 py-3 flex justify-between items-center">
				<div class="flex items-center space-x-3 select-none">
					<img
src="https://wiki.chiclelandia.com/chiclelandia-logo.png" alt="Chiclelandia Logo"
						class="h-10 w-10 rounded-sm">
					<span class="text-xl font-bold text-amber-400 tracking-wide">CHICLELANDIA</span>
				</div>

				<!-- Menú para desktop -->
				<nav class="hidden md:flex space-x-6 items-center">
					<a
href="https://discord.gg/H2MfDyvukj" _target="_blank"
						class="rust-menu-item text-amber-100 hover:text-amber-300 px-2 py-1">DISCORD</a>
					<a href="#" class="rust-menu-item text-amber-100 hover:text-amber-300 px-2 py-1">TIENDA</a>
					<a href="#" class="rust-menu-item text-amber-100 hover:text-amber-300 px-2 py-1">REGLAS</a>

					<div class="flex items-center space-x-3">
						<!-- Selector de idioma -->
						<div class="relative group">
							<button class="rust-button flex items-center px-3 py-1 text-sm">
								<span class="mr-1">🌐</span>
								<span>ES</span>
								<svg
class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"
									xmlns="http://www.w3.org/2000/svg">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
								</svg>
							</button>

							<div
								class="absolute right-0 hidden group-hover:block mt-1 w-32 bg-[#2a1e13] border border-[#5c3a21] shadow-lg">
								<a
href="#"
									class="block px-4 py-2 text-amber-100 hover:bg-[#3a2a18] hover:text-amber-300 transition flex items-center">
									<span class="mr-2">🇪🇸</span> Español
								</a>
								<div class="rust-divider" />
								<a
href="#"
									class="block px-4 py-2 text-amber-100 hover:bg-[#3a2a18] hover:text-amber-300 transition flex items-center">
									<span class="mr-2">🇬🇧</span> English
								</a>
							</div>
						</div>

						<button class="rust-button text-amber-100 px-4 py-1 rounded-sm text-sm font-semibold">
							CONECTAR
						</button>
					</div>
				</nav>

				<!-- Botón hamburguesa para mobile -->
				<button id="menu-toggle" class="md:hidden focus:outline-none">
					<svg
class="w-8 h-8 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
					</svg>
				</button>
			</div>

			<!-- Menú para mobile -->
			<div id="mobile-menu" class="mobile-menu hidden md:hidden absolute top-full left-0 right-0 py-3 px-4">
				<div class="flex flex-col space-y-3">
					<a href="#" class="rust-menu-item text-amber-100 hover:text-amber-300 px-2 py-2">DISCORD</a>
					<div class="rust-divider my-1" />
					<a href="#" class="rust-menu-item text-amber-100 hover:text-amber-300 px-2 py-2">TIENDA</a>
					<div class="rust-divider my-1" />
					<a href="#" class="rust-menu-item text-amber-100 hover:text-amber-300 px-2 py-2">REGLAS</a>
					<div class="pt-2 flex flex-col space-y-3">
						<div class="rust-divider" />
						<div class="text-amber-100 uppercase text-sm font-semibold px-2">
							Idioma
						</div>
						<a href="#" class="rust-menu-item flex items-center px-2 py-2">
							<span class="mr-2">🇪🇸</span> Español
						</a>
						<a href="#" class="rust-menu-item flex items-center px-2 py-2">
							<span class="mr-2">🇬🇧</span> English
						</a>
						<div class="rust-divider" />
						<button class="rust-button w-full text-amber-100 px-4 py-2 rounded-sm text-sm font-semibold">
							CONECTAR
						</button>
					</div>
				</div>
			</div>
		</header>

		<!-- Contenido principal -->
		<main class="flex items-center justify-center min-h-[calc(100vh-6rem)] px-4">
			<!-- Ajusta el 6rem según tu header -->
			<!-- Tarjeta Discord Centrada -->
			<div class="w-full max-w-2xl space-y-4">
				<div class="rust-card bg-[#1e1a16] border border-[#5c3a21] rounded-sm overflow-hidden shadow-lg">
					<!-- Header de la tarjeta -->
					<div class="bg-[#2a1e13] border-b border-[#5c3a21] px-6 py-4">
						<div class="flex items-center">
							<svg
class="w-8 h-8 text-[#5865F2]" fill="currentColor" viewBox="0 0 24 24"
								xmlns="http://www.w3.org/2000/svg">
								<path
									d="M19.27 5.33C17.94 4.71 16.5 4.26 15 4a.09.09 0 0 0-.07.03c-.18.33-.39.76-.53 1.09a16.09 16.09 0 0 0-4.8 0c-.14-.34-.35-.76-.54-1.09c-.01-.02-.04-.03-.07-.03c-1.5.26-2.93.71-4.27 1.33c-.01 0-.02.01-.03.02c-2.72 4.07-3.47 8.03-3.1 11.95c0 .02.01.04.03.05c1.8 1.32 3.53 2.12 5.24 2.65c.03.01.06 0 .07-.02c.4-.55.76-1.13 1.07-1.74c.02-.04 0-.08-.04-.09c-.57-.22-1.11-.48-1.64-.78c-.04-.02-.04-.08-.01-.11c.11-.08.22-.17.33-.25c.02-.02.05-.02.07-.01c3.44 1.57 7.15 1.57 10.55 0c.02-.01.05-.01.07.01c.11.09.22.17.33.26c.04.03.04.09-.01.11c-.52.31-1.07.56-1.64.78c-.04.01-.05.06-.04.09c.32.61.68 1.19 1.07 1.74c.03.01.06.02.09.01c1.72-.53 3.45-1.33 5.25-2.65c.02-.01.03-.03.03-.05c.44-4.53-.73-8.46-3.1-11.95c-.01-.01-.02-.02-.04-.02zM8.52 14.91c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12c0 1.17-.84 2.12-1.89 2.12zm6.97 0c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12c0 1.17-.83 2.12-1.89 2.12z" />
							</svg>
							<h2 class="ml-3 text-xl font-bold text-amber-300 uppercase tracking-wide">
								Chiclelandia Rust
							</h2>
						</div>
					</div>

					<!-- Contenido de la tarjeta -->
					<div class="px-6 py-4">
						<p class="text-amber-100 mb-4 text-center sm:text-left">
							Únete a nuestra comunidad de Discord para estar al día con las
							últimas noticias, eventos y conversar con otros jugadores.
						</p>

						<div class="flex flex-col sm:flex-row justify-between items-center space-y-3 sm:space-y-0">
							<div class="flex items-center">
								<div class="h-3 w-3 rounded-full bg-green-500 mr-2" />
								<span class="text-green-400 text-sm">En línea: <span id="discord-members">...</span></span>
							</div>

							<a
href="https://discord.gg/H2MfDyvukj" target="_blank"
								class="rust-button-discord px-6 py-2 rounded-sm font-semibold text-white transition-all flex items-center justify-center">
								<svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
									<path
										d="M19.27 5.33C17.94 4.71 16.5 4.26 15 4a.09.09 0 0 0-.07.03c-.18.33-.39.76-.53 1.09a16.09 16.09 0 0 0-4.8 0c-.14-.34-.35-.76-.54-1.09c-.01-.02-.04-.03-.07-.03c-1.5.26-2.93.71-4.27 1.33c-.01 0-.02.01-.03.02c-2.72 4.07-3.47 8.03-3.1 11.95c0 .02.01.04.03.05c1.8 1.32 3.53 2.12 5.24 2.65c.03.01.06 0 .07-.02c.4-.55.76-1.13 1.07-1.74c.02-.04 0-.08-.04-.09c-.57-.22-1.11-.48-1.64-.78c-.04-.02-.04-.08-.01-.11c.11-.08.22-.17.33-.25c.02-.02.05-.02.07-.01c3.44 1.57 7.15 1.57 10.55 0c.02-.01.05-.01.07.01c.11.09.22.17.33.26c.04.03.04.09-.01.11c-.52.31-1.07.56-1.64.78c-.04.01-.05.06-.04.09c.32.61.68 1.19 1.07 1.74c.03.01.06.02.09.01c1.72-.53 3.45-1.33 5.25-2.65c.02-.01.03-.03.03-.05c.44-4.53-.73-8.46-3.1-11.95c-.01-.01-.02-.02-.04-.02zM8.52 14.91c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12c0 1.17-.84 2.12-1.89 2.12zm6.97 0c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12c0 1.17-.83 2.12-1.89 2.12z" />
								</svg>
								Unirse al Discord
							</a>
						</div>
					</div>
				</div>

				<div class="rust-card bg-[#1e1a16] border border-[#5c3a21] rounded-sm overflow-hidden shadow-lg">
					<!-- Header de la tarjeta -->
					<div class="bg-[#2a1e13] border-b border-[#5c3a21] px-6 py-4">
						<div class="flex items-center">
							<svg
class="w-8 h-8 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"
								xmlns="http://www.w3.org/2000/svg">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
							</svg>
							<h2 class="ml-3 text-xl font-bold text-amber-300 uppercase tracking-wide">
								Conectar al Servidor
							</h2>
						</div>
					</div>

					<!-- Contenido de la tarjeta -->
					<div class="px-6 py-4">
						<!-- Pestañas de servidores -->
						<div class="flex border-b border-[#5c3a21] mb-4">
							<button
onclick="changeServer('x5', 'rust-eu1.chiclelandia.com', 'EU/ESP x5')"
								class="rust-tab active px-4 py-2 font-medium text-sm uppercase tracking-wider">
								EU/ESP x5
							</button>
							<button
onclick="changeServer('x2', 'rust-eu1.chiclelandia.com', 'EU/ESP x2')"
								class="rust-tab px-4 py-2 font-medium text-sm uppercase tracking-wider">
								EU/ESP x2
							</button>
							<button
onclick="changeServer('vanilla', 'rust-eu1.chiclelandia.com', 'EU/ESP Vanilla')"
								class="rust-tab px-4 py-2 font-medium text-sm uppercase tracking-wider">
								Vanilla
							</button>
						</div>

						<!-- Contenido dinámico del servidor seleccionado -->
						<div id="server-x5" class="server-content">
							<div class="flex flex-col sm:flex-row justify-between items-center mb-4">
								<div class="flex items-center mb-3 sm:mb-0">
									<div class="h-3 w-3 rounded-full bg-green-500 mr-2" />
									<span class="text-green-400 text-sm">Estado: <span id="server-status-x5">En línea</span></span>
								</div>
								<span class="text-amber-200 text-sm">Jugadores: <span id="server-players-x5">32/100</span></span>
							</div>

							<div class="bg-[#2a1e13] p-4 rounded-sm border border-[#5c3a21] mb-4">
								<div class="flex items-center justify-between mb-2">
									<span class="text-amber-100 font-mono text-sm">IP del servidor:</span>
									<span class="text-amber-300 font-mono">rust-eu1.chiclelandia.com</span>
								</div>

								<div class="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-3">
									<!-- Botón Copiar IP -->
									<button
onclick="copyToClipboard('rust-eu1.chiclelandia.com')"
										class="rust-button-action flex items-center justify-center px-4 py-2">
										<svg
class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"
											xmlns="http://www.w3.org/2000/svg">
											<path
stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
												d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
										</svg>
										Copiar IP
									</button>

									<!-- Botón Conectar Directamente -->
									<a
href="steam://run/252490//+connect rust-eu1.chiclelandia.com"
										class="rust-button-action flex items-center justify-center px-4 py-2 text-center">
										<svg
class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"
											xmlns="http://www.w3.org/2000/svg">
											<path
stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
												d="M13 10V3L4 14h7v7l9-11h-7z" />
										</svg>
										Conectar Directamente
									</a>
								</div>
							</div>
						</div>

						<div id="server-x2" class="server-content hidden">
							<!-- Contenido similar para x2 -->
						</div>

						<div id="server-vanilla" class="server-content hidden">
							<!-- Contenido similar para vanilla -->
						</div>
					</div>
				</div>
			</div>
		</main>
	</div>
</template>

<script setup lang="ts">

</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Rajdhani:wght@400;500;600;700&display=swap");

body::before {
	content: "";
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, 0.5);
	z-index: -1;
}

main {
	position: relative;
	z-index: 1;
}

body {
	background-color: #1a1a1a;
	/* background-image: url("https://images6.alphacoders.com/138/thumb-1920-1383836.webp"); */
	background-size: cover;
	background-position: center;
	background-attachment: fixed;
	min-height: 100vh;
	font-family: "Rajdhani", sans-serif;
	color: #e1e1e1;
}

.rust-header {
	background: rgba(20, 20, 20, 0.85);
	border-bottom: 2px solid #5c3a21;
	box-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
}

.rust-menu-item {
	position: relative;
	text-transform: uppercase;
	letter-spacing: 1px;
	font-weight: 600;
}

.rust-menu-item::after {
	content: "";
	position: absolute;
	width: 0;
	height: 2px;
	bottom: -2px;
	left: 0;
	background-color: #d38a3a;
	transition: width 0.3s;
}

.rust-menu-item:hover::after {
	width: 100%;
}

.rust-button {
	background: linear-gradient(to bottom, #5c3a21, #3a2415);
	border: 1px solid #8a5a2c;
	box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
	transition: all 0.2s;
}

.rust-button:hover {
	background: linear-gradient(to bottom, #6d4a31, #4a3415);
	transform: translateY(-1px);
	box-shadow: 0 3px 8px rgba(0, 0, 0, 0.4);
}

.rust-button:active {
	transform: translateY(1px);
	box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
}

.rust-divider {
	height: 1px;
	background: linear-gradient(to right,
			transparent,
			#5c3a21,
			transparent);
}

.mobile-menu {
	background: rgba(30, 25, 20, 0.95);
	border: 1px solid #5c3a21;
	box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);
}

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

main,
header {
	position: relative;
	z-index: 1;
}

.rust-card {
	box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
	transition: transform 0.2s, box-shadow 0.2s;
}

/* .rust-card:hover {
        transform: translateY(-2px);
        box-shadow: 0 6px 20px rgba(0, 0, 0, 0.4);
      } */

.rust-button-discord {
	background: linear-gradient(to bottom, #5865f2, #4752c4);
	border: 1px solid #6a75f3;
	box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
}

.rust-button-discord:hover {
	background: linear-gradient(to bottom, #6a75f3, #5865f2);
	transform: translateY(-1px);
	box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
}

.rust-button-discord:active {
	transform: translateY(1px);
	box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
}

/* Estilos para los botones de acción */
.rust-button-action {
	background: linear-gradient(to bottom, #5c3a21, #3a2415);
	border: 1px solid #8a5a2c;
	color: #e1c78c;
	transition: all 0.2s;
	border-radius: 0.125rem;
}

.rust-button-action:hover {
	background: linear-gradient(to bottom, #6d4a31, #4a3415);
	transform: translateY(-1px);
	box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
}

.rust-button-action:active {
	transform: translateY(1px);
	box-shadow: none;
}
</style>