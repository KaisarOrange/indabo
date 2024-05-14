<script>
	import { viewportWidth } from '$lib/store.js';
	import { onMount } from 'svelte';

	let isMobileView;

	// Reactive statement to check if the viewport width is mobile
	$: isMobileView = $viewportWidth <= 768;

	// Initialize the store value on component mount
	onMount(() => {
		viewportWidth.set(window.innerWidth);
	});
</script>

<div class="flex pt-4 pb-4 justify-center flex-col items-center gap-8 mt-10 mb-32">
	<h2 class="text-red-500 font-bold">Selamat Datang!</h2>
	<h1 class="font-extrabold text-3xl w-2/3 text-center">
		Solusi Terbaik Untuk Spare Parts Mesin Alat Berat
	</h1>
	<p class="w-2/3 text-center">
		Penyedia Spare Parts dan Remanufacture Perbaikan Komponen Alat Berat
	</p>
	<div>
		<button
			class="bg-red-500 text-white font-bold p-3 rounded-md hover:bg-red-700 active:bg-red-900"
			>Hubungi Kami</button
		>
		<button
			class="border-black border-2 font-bold p-3 rounded-md hover:bg-gray-200 active:bg-gray-300"
			>Layanan Kami</button
		>
	</div>
</div>
<!-- second section -->
<div class="bg-[url('/31.png')] flex flex-col items-center px-10 pb-20">
	<img src="/2.png" alt="" class="w-80 h-80 md:w-96 md:h-96 relative bottom-28" />
	<div class="flex flex-col md:flex-row md:w-3/4 items-center gap-10">
		<div class="md:w-1/2">
			<h2 class="text-white font-bold text-4xl text-justify mb-3">Terbaik dan Terpercaya</h2>
			<p class="text-white text-justify">
				Team sales kami memperoleh suku cadang dan komponen dari seluruh panca negara, termasuk dari
				Australia, Eropa, Amerika serikat, dan Asia Tenggara
			</p>
		</div>
		<div class="">
			<img class="" src="/32.png" alt="" />
		</div>
	</div>
	<div class="flex mt-10 gap-10 text-center">
		<div class="">
			<h3 class="text-red-500 text-4xl font-bold">15+ Tahun</h3>
			<p class="text-white">Pengalaman</p>
		</div>
		<div>
			<h3 class="text-red-500 text-4xl font-bold">30+</h3>
			<p class="text-white">Produk</p>
		</div>
		<div>
			<h3 class="text-red-500 text-4xl font-bold">100%</h3>
			<p class="text-white">Klien puas</p>
		</div>
	</div>
</div>
<!-- Third section -->
<div class="mt-10">
	<h2 class="text-center text-4xl font-bold">
		Berkomitmen Untuk Selalu Memberikan Pelayanan Terbaik
	</h2>

	<div>
		{#if isMobileView}
			<div class="mt-14">
				<div
					class="flex flex-col md:flex-row items-center md:w-2/3 justify-center m-auto gap-4 mb-14"
				>
					<div class="w-2/3 text-justify md:w-1/2">
						<h3 class="text-2xl font-bold">Fasilitas <span class="text-red-500">Modern</span></h3>
						<p>
							Fasilitas kami menyediakan lingkungan yang bersih dan modern untuk perbaikan seluruh
							jenis komponen dan suku cadang alat berat industri konstruksi, pertambangan, minyak
							dan gas bumi
						</p>
					</div>
					<img class="w-72" src="/33.png" alt="" />
				</div>
				<div
					class="flex flex-col md:flex-row items-center md:w-2/3 justify-center m-auto gap-4 mb-14"
				>
					<div class="w-2/3 text-justify md:w-1/2">
						<h3 class="text-2xl font-bold">
							<span class="text-red-500">Standard</span> Process Procedure
						</h3>
						<p>
							Proses perbaikan dan remanufacture suku cadang melewati berbagai tahap yang antara
							lain pembersihan, pemeriksaan, dan pembangunan kembali sesuai dengan kebutuhan dan
							spesifikasi OEM menggunakan peralatan terbaru.
						</p>
					</div>
					<img class="w-72" src="/34.png" alt="" />
				</div>
				<div
					class="flex flex-col md:flex-row items-center md:w-2/3 justify-center m-auto gap-4 mb-14"
				>
					<div class="w-2/3 text-justify md:w-1/2">
						<h3 class="text-2xl font-bold">Effisien <span class="text-red-500">& Cepat</span></h3>
						<p>
							Kami memahami bahwa semakin lama mesin off site, maka semakin banyak uang yang anda
							keluarkan, dengan ini kami bekerja keras untuk selalu memberikan pelayanan yang cepat
							dan effisien dengan hasil yang optimal.
						</p>
					</div>
					<img class="w-72" src="/35.png" alt="" />
				</div>
				<div
					class="flex flex-col md:flex-row items-center md:w-2/3 justify-center m-auto gap-4 mb-14"
				>
					<div class="w-2/3 text-justify md:w-1/2">
						<h3 class="text-2xl font-bold">
							<span class="text-red-500">After sales </span> care
						</h3>
						<p>Jaminan Garansi 6 bulan Atau 3000 Jam</p>
					</div>
					<img class="w-72" src="/36.png" alt="" />
				</div>
			</div>
		{:else}
			<div class="mt-14">
				<div
					class="flex flex-col md:flex-row items-center md:w-2/3 justify-center m-auto gap-4 mb-14"
				>
					<div class="w-2/3 text-justify md:w-1/2">
						<h3 class="text-2xl font-bold">Fasilitas <span class="text-red-500">Modern</span></h3>
						<p>
							Fasilitas kami menyediakan lingkungan yang bersih dan modern untuk perbaikan seluruh
							jenis komponen dan suku cadang alat berat industri konstruksi, pertambangan, minyak
							dan gas bumi
						</p>
					</div>
					<img class="w-72" src="/33.png" alt="" />
				</div>
				<div
					class="flex flex-col md:flex-row items-center md:w-2/3 justify-center m-auto gap-4 mb-14"
				>
					<img class="w-72" src="/34.png" alt="" />
					<div class="w-2/3 text-justify md:w-1/2">
						<h3 class="text-2xl font-bold">
							<span class="text-red-500">Standard</span> Process Procedure
						</h3>
						<p>
							Proses perbaikan dan remanufacture suku cadang melewati berbagai tahap yang antara
							lain pembersihan, pemeriksaan, dan pembangunan kembali sesuai dengan kebutuhan dan
							spesifikasi OEM menggunakan peralatan terbaru.
						</p>
					</div>
				</div>
				<div
					class="flex flex-col md:flex-row items-center md:w-2/3 justify-center m-auto gap-4 mb-14"
				>
					<div class="w-2/3 text-justify md:w-1/2">
						<h3 class="text-2xl font-bold">Effisien <span class="text-red-500">& Cepat</span></h3>
						<p>
							Kami memahami bahwa semakin lama mesin off site, maka semakin banyak uang yang anda
							keluarkan, dengan ini kami bekerja keras untuk selalu memberikan pelayanan yang cepat
							dan effisien dengan hasil yang optimal.
						</p>
					</div>
					<img class="w-72" src="/35.png" alt="" />
				</div>
				<div
					class="flex flex-col md:flex-row items-center md:w-2/3 justify-center m-auto gap-4 mb-14"
				>
					<img class="w-72" src="/36.png" alt="" />
					<div class="w-2/3 text-justify md:w-1/2">
						<h3 class="text-2xl font-bold">
							<span class="text-red-500">After sales </span> care
						</h3>
						<p>Jaminan Garansi 6 bulan Atau 3000 Jam</p>
					</div>
				</div>
			</div>
		{/if}
	</div>
</div>
<!-- Fourth section -->
<div class="bg-black">
	<h2 class="text-4xl text-white font-bold text-center">Produk Kami</h2>
</div>
