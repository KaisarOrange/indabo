<script>
	import { fade } from 'svelte/transition';
</script>

<div transition:fade={{ delay: 250, duration: 300 }}>
	<div class="bg-[url('/31.png')] flex flex-col items-center px-10 pb-20 gap-10 py-10">
		<h1 class="text-3xl md:text-5xl text-white font-bold">PT. Indabo Jaya Mandiri</h1>
		<img class="w-72 md:w-80" src="/2.png" alt="" />
		<p class="text-white md:w-1/2 text-justify">
			PT. Indabo Jaya Mandiri adalah perusahaan yang terletak di Balikpapan, Kalimantan Timur yang
			berdiri pada tahun 2009 yang sebelumnya dikenal sebagai CV Indabo jaya mandiri. Fokus utama
			PT.Indabo Jaya Mandiri adalah menjadi solusi nomor satu untuk suku cadang heavy duty untuk
			industri konstruksi, pertambangan, minyak dan gas bumi. Kami juga fokus pada pembuatan ulang
			Turbocharger, Transmissions,Pompa Air, Pompa Hidrolik, Radiator dan Pengisi Minyak.
		</p>
	</div>
	<div class="my-10 flex flex-col items-center">
		<h2 class="font-bold text-lg text-center">Lokasi</h2>
		<iframe
			class=" mt-5 w-fit h-80 md:w-[800px] md:h-[450px]"
			title="PT Indabo Jaya Mandiri location maps"
			src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8511271265947!2d116.87359267510541!3d-1.2616138987263805!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2df1470938f1be43%3A0x4a9cef94e8f209e0!2sPT.INDABO%20JAYA%20MANDIRI!5e0!3m2!1sid!2sid!4v1715679333687!5m2!1sid!2sid"
			style="border:0;"
			allowfullscreen=""
			loading="lazy"
			referrerpolicy="no-referrer-when-downgrade"
		></iframe>
	</div>
	<div class="p-4 bg-gradient-to-b from-indigo-900 to-black flex flex-col items-center py-10">
		<h2 class="text-red-500 font-bold w-full text-center">Nilai perusahaan</h2>
		<h1 class="text-white font-bold text-3xl text-center">
			Kami Terus Berupaya Untuk Selalu Transparan Dengan Klien Kami
		</h1>
		<div class="flex items-center gap-4 mt-10">
			<img src="/ranking.png" alt="" />
			<div class="text-white">
				<h2 class="font-bold text-2xl">Visi</h2>
				<p class="text-justify">
					Untuk menjadi perusahaan, yang memuaskan pelanggan dan akan berdampak pada perbaikan
					kehidupan.
				</p>
			</div>
		</div>

		<div class="flex items-center gap-4 mt-10">
			<img src="/gps.png" alt="" />
			<div class="text-white">
				<h2 class="font-bold text-2xl">Visi</h2>
				<p class="text-justify">
					Untuk menjadi perusahaan, yang memuaskan pelanggan dan akan berdampak pada perbaikan
					kehidupan.
				</p>
			</div>
		</div>
	</div>
</div>
