<script setup>
import { ref } from 'vue'

const activeTab = ref('about')
const showVideoModal = ref(false)
const currentVideo = ref('')

const openVideoModal = (videoUrl) => {
    currentVideo.value = videoUrl
    showVideoModal.value = true
}
</script>

<template>
    <div class="relative flex size-full min-h-screen flex-col overflow-x-hidden bg-gray-50">
        <!-- Hero Section -->
        <section class="relative h-[60vh] md:h-[80vh] bg-gray-900 overflow-hidden">
            <div class="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-purple-900/80 z-10"></div>
            <img src="https://res.cloudinary.com/campnet/image/upload/v1754434712/264540395_456000255890669_8745582725785647329_n_iz3d8k.jpg"
                alt="Rev. Dr. Chidi Okoroafor preaching" class="w-full h-full object-cover object-center" />
            <div class="absolute inset-0 z-20 flex items-center justify-center text-center px-4">
                <div class="max-w-4xl">
                    <h1 class="text-4xl md:text-6xl font-bold text-white font-serif mb-4 animate-fade-in">Rev. Dr. Chidi
                        Okoroafor</h1>
                    <p class="text-xl md:text-2xl text-blue-100 mb-8 animate-fade-in delay-100">Revivalist • Kingdom
                        Builder</p>
                    <div class="flex gap-4 justify-center animate-fade-in delay-200">
                    </div>
                </div>
            </div>
        </section>

        <main class="flex-1">
            <!-- About Section -->
            <section class="py-12 md:py-20 bg-white">
                <div class="container mx-auto px-4 sm:px-6">
                    <div class="flex flex-col md:flex-row gap-12 items-center">
                        <div class="md:w-1/3 lg:w-2/5 relative group">
                            <div
                                class="absolute -inset-2 bg-gradient-to-r from-gray-400 to-gray-600 rounded-xl blur-lg opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200">
                            </div>
                            <img alt="Rev. Dr. Chidi Okoroafor"
                                class="relative rounded-xl shadow-2xl w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-500"
                                src="https://res.cloudinary.com/campnet/image/upload/v1754434712/264540395_456000255890669_8745582725785647329_n_iz3d8k.jpg" />
                            <div class="mt-6 bg-gray-50 p-6 rounded-xl border-l-4 border-gray-500">
                                <h4 class="text-lg font-bold text-black-800 mb-2">Quick Facts</h4>
                                <ul class="space-y-2 text-gray-700">
                                    <li class="flex items-start">
                                        <svg class="h-5 w-5 text-gray-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24"
                                            stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        <span>Born: September 25, 1964 (Arochukwu, Abia State, Nigeria)</span>
                                    </li>
                                    <li class="flex items-start">
                                        <svg class="h-5 w-5 text-gray-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24"
                                            stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                        </svg>
                                        <span>Education: Dual PhD (Sociology of Religion & International
                                            Relations)</span>
                                    </li>
                                    <li class="flex items-start">
                                        <svg class="h-5 w-5 text-gray-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24"
                                            stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                        </svg>
                                        <span>Ministry: General Superintendent, Assemblies of God Nigeria
                                            (2014–2020)</span>
                                    </li>
                                    <li class="flex items-start">
                                        <svg class="h-5 w-5 text-gray-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24"
                                            stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        <span>Global Influence: Executive Member, World Assemblies of God
                                            Fellowship</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div class="md:w-2/3 lg:w-3/5">
                            <h2 class="text-3xl md:text-5xl font-bold font-serif text-blue-800 mb-6">About Rev. Dr.
                                Chidi Agodi Okoroafor</h2>
                            <div class="prose max-w-none text-gray-700 text-lg leading-relaxed space-y-6">
                                <p>
                                    Rev. Dr. Chidi Agodi Okoroafor is a distinguished scholar, theologian, and global
                                    church leader with a profound impact in both religious and academic spheres. Born on
                                    <strong>September 25, 1964</strong>, in <strong>Isimkpu, Arochukwu LGA, Abia State,
                                        Nigeria</strong>, he was raised under the disciplined guidance of his father,
                                    <strong>Pa Jonas Okoroafor</strong>, a respected headmaster.
                                </p>
                                <p>
                                    From his youth, Dr. Okoroafor exhibited exceptional leadership, serving as
                                    <strong>President of the Scripture Union, Press Club, and Debating Society</strong>
                                    at National High School, Azumini Ndoki. His divine calling led him to reject a U.S.
                                    education opportunity to enroll in <strong>Central Bible College, Old Umuahia
                                        (1984)</strong>, marking the start of a transformative ministry journey.
                                </p>
                                <p>
                                    A <strong>Harvard-trained negotiator</strong> and holder of <strong>two PhDs
                                        (Sociology of Religion & International Relations)</strong>, Dr. Okoroafor
                                    bridges academia and faith, having lectured at institutions like <strong>Imo State
                                        University</strong> and <strong>Evangel University</strong>. His 11 books,
                                    including <em>"The Excellency of Teamwork"</em> and <em>"Gospel Bell"</em>, reflect
                                    his deep theological and leadership insights.
                                </p>
                                <!----<div class="bg-yellow-50 border-l-4 border-yellow-400 p-4 my-6">
                                    <p class="font-medium text-yellow-800">
                                        "My life's mission is to know Christ and make Him known, through education,
                                        leadership, and unwavering faith." — Rev. Dr. Chidi Okoroafor
                                    </p>
                                </div>--->
                                <p>
                                    As <strong>General Superintendent of Assemblies of God Nigeria (2014–2020)</strong>,
                                    he provided visionary leadership to one of Africa’s largest Pentecostal
                                    denominations. He also served as <strong>President of the Central African Assemblies
                                        of God Alliance (CAAGA)</strong> and <strong>Executive Member of the World
                                        Assemblies of God Fellowship</strong>.
                                </p>
                                <p>
                                    Married to <strong>Rev. Stella Chidi Okoroafor</strong>, their union is blessed with
                                    <strong>five children and three grandchildren</strong>. His legacy continues through
                                    <strong>Intercessors’ Prayer Camp International</strong>, founded in 1982, and his
                                    influential sermons like <em>"Possibility of Your Impossibility"</em> and <em>"The
                                        Latter Glory Shall Be Greater."</em>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <!-- Ministry Section -->
            <section class="py-12 md:py-20 bg-gray-50">
                <div class="container mx-auto px-4 sm:px-6">
                    <div class="text-center mb-16">
                        <h2 class="text-3xl md:text-5xl font-bold font-serif text-gray-800 mb-4">Ministry Journey</h2>
                        <p class="text-xl text-gray-600 max-w-3xl mx-auto">
                            Key milestones in Rev. Dr. Chidi Okoroafor's transformative leadership and ministry
                        </p>
                    </div>

                    <!-- Timeline -->
                    <div class="relative">
                        <!-- Line -->
                        <div
                            class="hidden md:block absolute left-1/2 h-full w-1 bg-gradient-to-b from-blue-400 to-purple-500 transform -translate-x-1/2">
                        </div>

                        <!-- Items -->
                        <div class="space-y-12 md:space-y-16">
                            <!-- Item 1 -->
                            <div class="relative flex flex-col md:flex-row items-center">
                                <div class="md:w-1/2 md:pr-12 mb-6 md:mb-0 md:text-right">
                                    <div class="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                                        <div class="text-sm font-semibold text-blue-600 mb-1">1982</div>
                                        <h3 class="text-xl font-bold font-serif text-gray-900 mb-2">Founding of
                                            Intercessors’ Prayer Camp</h3>
                                        <p class="text-gray-700">
                                            While still in secondary school, Dr. Okoroafor founded the
                                            <strong>Intercessors’ Prayer Camp International</strong>, a ministry that
                                            would grow into a global movement for spiritual revival and intercession.
                                        </p>
                                    </div>
                                </div>
                                <div
                                    class="hidden md:flex absolute left-1/2 -translate-x-1/2 h-5 w-5 rounded-full bg-blue-500 border-4 border-white shadow-lg">
                                </div>
                                <div class="md:w-1/2 md:pl-12">
                                    <div class="h-48 md:h-64 rounded-xl overflow-hidden shadow-lg">
                                        <img src="https://res.cloudinary.com/campnet/image/upload/v1754432163/518347537_1291231012367585_2039565648349138326_n_xz08xz.jpg"
                                            alt="Early Ministry"
                                            class="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                                    </div>
                                </div>
                            </div>

                            <!-- Item 2 -->
                            <div class="relative flex flex-col md:flex-row items-center">
                                <div class="md:w-1/2 md:pr-12 order-2 md:order-1">
                                    <div class="h-48 md:h-64 rounded-xl overflow-hidden shadow-lg">
                                        <img src="https://res.cloudinary.com/campnet/image/upload/v1754432163/515203584_1303620601128626_7244679040031080894_n_lnrhpq.jpg"
                                            alt="Bible School"
                                            class="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                                    </div>
                                </div>
                                <div
                                    class="hidden md:flex absolute left-1/2 -translate-x-1/2 h-5 w-5 rounded-full bg-blue-500 border-4 border-white shadow-lg">
                                </div>
                                <div class="md:w-1/2 md:pl-12 mb-6 md:mb-0 order-1 md:order-2 md:text-left">
                                    <div class="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                                        <div class="text-sm font-semibold text-blue-600 mb-1">1984</div>
                                        <h3 class="text-xl font-bold font-serif text-gray-900 mb-2">Answering the Call
                                            to Ministry</h3>
                                        <p class="text-gray-700">
                                            Rejected a U.S. education opportunity to enroll at <strong>Central Bible
                                                College, Old Umuahia</strong>, marking the formal beginning of his
                                            theological training and pastoral ministry.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <!-- Item 3 -->
                            <div class="relative flex flex-col md:flex-row items-center">
                                <div class="md:w-1/2 md:pr-12 mb-6 md:mb-0 md:text-right">
                                    <div class="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                                        <div class="text-sm font-semibold text-blue-600 mb-1">2005</div>
                                        <h3 class="text-xl font-bold font-serif text-gray-900 mb-2">Earning a PhD in
                                            Sociology of Religion</h3>
                                        <p class="text-gray-700">
                                            Completed his first doctoral degree at the <strong>University of Port
                                                Harcourt</strong>, researching <em>"Evangelism and Inculturation in
                                                Assemblies of God, Nigeria."</em> This academic achievement strengthened
                                            his dual role as scholar and minister.
                                        </p>
                                    </div>
                                </div>
                                <div
                                    class="hidden md:flex absolute left-1/2 -translate-x-1/2 h-5 w-5 rounded-full bg-blue-500 border-4 border-white shadow-lg">
                                </div>
                                <div class="md:w-1/2 md:pl-12">
                                    <div class="h-48 md:h-64 rounded-xl overflow-hidden shadow-lg">
                                        <img src="https://res.cloudinary.com/campnet/image/upload/v1754432163/516828153_1290013349156018_4094993917303627856_n_tpmgmu.jpg"
                                            alt="Academic Achievement"
                                            class="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                                    </div>
                                </div>
                            </div>

                            <!-- Item 4 -->
                            <div class="relative flex flex-col md:flex-row items-center">
                                <div class="md:w-1/2 md:pr-12 order-2 md:order-1">
                                    <div class="h-48 md:h-64 rounded-xl overflow-hidden shadow-lg">
                                        <img src="https://res.cloudinary.com/campnet/image/upload/v1754432163/518406256_1300155071475179_5079516375428742293_n_cgn0dh.jpg"
                                            alt="Leadership"
                                            class="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                                    </div>
                                </div>
                                <div
                                    class="hidden md:flex absolute left-1/2 -translate-x-1/2 h-5 w-5 rounded-full bg-blue-500 border-4 border-white shadow-lg">
                                </div>
                                <div class="md:w-1/2 md:pl-12 mb-6 md:mb-0 order-1 md:order-2 md:text-left">
                                    <div class="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                                        <div class="text-sm font-semibold text-blue-600 mb-1">2014–2020</div>
                                        <h3 class="text-xl font-bold font-serif text-gray-900 mb-2">General
                                            Superintendent of Assemblies of God Nigeria</h3>
                                        <p class="text-gray-700">
                                            Provided visionary leadership to one of Africa’s largest Pentecostal
                                            denominations, overseeing exponential growth, establishing <strong>Evangel
                                                University</strong> as Chancellor, and representing Nigeria in the
                                            <strong>World Assemblies of God Fellowship</strong>.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <!-- Item 5 -->
                            <div class="relative flex flex-col md:flex-row items-center">
                                <div class="md:w-1/2 md:pr-12 mb-6 md:mb-0 md:text-right">
                                    <div class="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                                        <div class="text-sm font-semibold text-blue-600 mb-1">2024–Present</div>
                                        <h3 class="text-xl font-bold font-serif text-gray-900 mb-2">Pastoral Leadership
                                        </h3>
                                        <p class="text-gray-700">
                                            Serves as the <strong>Lead Pastor of Assemblies of God Church, Revival
                                                Pavilion</strong>, located in <strong>Enugu State</strong>.
                                            Rev. Dr. Chidi Okoroafor continues to lead with passion, vision, and deep
                                            spiritual insight, impacting lives through dynamic preaching, discipleship,
                                            and community transformation.
                                        </p>
                                    </div>
                                </div>
                                <div
                                    class="hidden md:flex absolute left-1/2 -translate-x-1/2 h-5 w-5 rounded-full bg-blue-500 border-4 border-white shadow-lg">
                                </div>
                                <div class="md:w-1/2 md:pl-12">
                                    <div class="h-48 md:h-64 rounded-xl overflow-hidden shadow-lg">
                                        <img src="https://res.cloudinary.com/campnet/image/upload/v1754434393/518340261_1300153071475379_3776448597300186025_n_jzejko.jpg"
                                            alt="Teaching"
                                            class="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <!-- Gallery Section -->
            <section class="py-12 md:py-20 bg-white">
                <div class="container mx-auto px-4 sm:px-6">
                    <div class="text-center mb-12">
                        <h2 class="text-3xl md:text-5xl font-bold font-serif text-gray-800 mb-4">Ministry Moments</h2>
                        <p class="text-xl text-gray-600 max-w-3xl mx-auto">
                            Capturing the transformative work of God through Rev. Dr. Chidi Okoroafor's ministry
                        </p>
                    </div>

                    <!-- Photo Grid -->
                    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        <!-- Item 1 -->
                        <div class="group relative overflow-hidden rounded-xl shadow-lg h-64">
                            <img src="https://res.cloudinary.com/campnet/image/upload/v1754432163/518347537_1291231012367585_2039565648349138326_n_xz08xz.jpg"
                                alt="Ministry Photo 1"
                                class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" />
                            <div
                                class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                                <!----<div>
                                    <h3 class="text-white font-bold text-lg">Crusade in Lagos</h3>
                                    <p class="text-white/80">2019 Hope for the Nations Crusade</p>
                                </div> -->
                            </div>
                        </div>

                        <!-- Item 2 -->
                        <div class="group relative overflow-hidden rounded-xl shadow-lg h-64">
                            <img src="https://res.cloudinary.com/campnet/image/upload/v1754432163/515203584_1303620601128626_7244679040031080894_n_lnrhpq.jpg"
                                alt="Ministry Photo 2"
                                class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" />
                            <div
                                class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">

                            </div>
                        </div>

                        <!-- Item 3 -->
                        <div class="group relative overflow-hidden rounded-xl shadow-lg h-64">
                            <img src="https://res.cloudinary.com/campnet/image/upload/v1754432163/516828153_1290013349156018_4094993917303627856_n_tpmgmu.jpg"
                                alt="Ministry Photo 3"
                                class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" />
                            <div
                                class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">

                            </div>
                        </div>

                        <!-- Item 4 -->
                        <div class="group relative overflow-hidden rounded-xl shadow-lg h-64">
                            <img src="https://res.cloudinary.com/campnet/image/upload/v1754432163/518406256_1300155071475179_5079516375428742293_n_cgn0dh.jpg"
                                alt="Ministry Photo 4"
                                class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" />
                            <div
                                class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">

                            </div>
                        </div>

                        <!-- Item 5 -->
                        <div class="group relative overflow-hidden rounded-xl shadow-lg h-64">
                            <img src="https://res.cloudinary.com/campnet/image/upload/v1754434329/518339624_1298769331613753_4158986257092969455_n_pamdnm.jpg"
                                alt="Ministry Photo 5"
                                class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" />
                            <div
                                class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">

                            </div>
                        </div>

                        <!-- Item 6 -->
                        <div class="group relative overflow-hidden rounded-xl shadow-lg h-64">
                            <img src="https://res.cloudinary.com/campnet/image/upload/v1754434393/518340261_1300153071475379_3776448597300186025_n_jzejko.jpg"
                                alt="Ministry Photo 6"
                                class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" />
                            <div
                                class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">

                            </div>
                        </div>

                        <!-- Item 7 -->
                        <div class="group relative overflow-hidden rounded-xl shadow-lg h-64">
                            <img src="https://res.cloudinary.com/campnet/image/upload/v1754588658/489843062_1225326172291403_8204843808852057554_n_xntp1z.jpg"
                                alt="Ministry Photo 6"
                                class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" />
                            <div
                                class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">

                            </div>
                        </div>


                        <!-- Item 8 -->
                        <div class="group relative overflow-hidden rounded-xl shadow-lg h-64">
                            <img src="https://res.cloudinary.com/campnet/image/upload/v1754588659/518150516_1292583738898979_6847420627544323009_n_nytyxc.jpg"
                                alt="Ministry Photo 6"
                                class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" />
                            <div
                                class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">

                            </div>
                        </div>


                        <!-- Item 9 -->
                        <div class="group relative overflow-hidden rounded-xl shadow-lg h-64">
                            <img src="https://res.cloudinary.com/campnet/image/upload/v1754588658/517473691_1293821722108514_5925831671177457416_n_fmfhly.jpg"
                                alt="Ministry Photo 6"
                                class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" />
                            <div
                                class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">

                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <!-- Core Beliefs Section -->
            <section class="py-16 md:py-24 bg-gradient-to-r from-gray-900 to-gray-600 text-white">
                <div class="container mx-auto px-4 sm:px-6">
                    <div class="text-center mb-16">
                        <h2 class="text-3xl md:text-5xl font-bold font-serif mb-4">Our Core Beliefs</h2>
                        <p class="text-xl text-blue-200 max-w-3xl mx-auto">
                            The foundational truths that guide Rev. Dr. Chidi Okoroafor's ministry
                        </p>
                    </div>

                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <!-- Belief 1 -->
                        <div
                            class="bg-white/10 p-6 rounded-xl backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300">
                            <div class="h-12 w-12 bg-blue-500 rounded-lg flex items-center justify-center mb-4">
                                <svg class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                </svg>
                            </div>
                            <h3 class="text-xl font-bold font-serif mb-3">Biblical Authority</h3>
                            <p class="text-blue-100">
                                We believe the Bible is the inspired, infallible Word of God and the ultimate authority
                                for faith, doctrine, and Christian living.
                            </p>
                        </div>

                        <!-- Belief 2 -->
                        <div
                            class="bg-white/10 p-6 rounded-xl backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300">
                            <div class="h-12 w-12 bg-blue-500 rounded-lg flex items-center justify-center mb-4">
                                <svg class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                            <h3 class="text-xl font-bold font-serif mb-3">Holy Spirit Empowerment</h3>
                            <p class="text-blue-100">
                                We believe in the baptism of the Holy Spirit with the evidence of speaking in tongues
                                and the operation of spiritual gifts for edification.
                            </p>
                        </div>

                        <!-- Belief 3 -->
                        <div
                            class="bg-white/10 p-6 rounded-xl backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300">
                            <div class="h-12 w-12 bg-blue-500 rounded-lg flex items-center justify-center mb-4">
                                <svg class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                            </div>
                            <h3 class="text-xl font-bold font-serif mb-3">Global Evangelism</h3>
                            <p class="text-blue-100">
                                We are committed to fulfilling the Great Commission by taking the Gospel to every
                                nation, tribe, and tongue with urgency and compassion.
                            </p>
                        </div>

                        <!-- Belief 4 -->
                        <div
                            class="bg-white/10 p-6 rounded-xl backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300">
                            <div class="h-12 w-12 bg-blue-500 rounded-lg flex items-center justify-center mb-4">
                                <svg class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                </svg>
                            </div>
                            <h3 class="text-xl font-bold font-serif mb-3">Divine Healing</h3>
                            <p class="text-blue-100">
                                We believe in the present-day ministry of healing through the power of Jesus Christ, who
                                is the same yesterday, today, and forever.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Testimonials Section -->
            <section class="py-16 md:py-24 bg-white">
                <div class="container mx-auto px-4 sm:px-6">
                    <div class="text-center mb-16">
                        <h2 class="text-3xl md:text-5xl font-bold font-serif text-gray-800 mb-4">Impact Stories</h2>
                        <p class="text-xl text-gray-600 max-w-3xl mx-auto">
                            Lives transformed through the ministry of Rev. Dr. Chidi Okoroafor
                        </p>
                    </div>

                    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <!-- Testimonial 1 -->
                        <div
                            class="bg-gray-50 p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow duration-300">
                            <div class="flex items-center mb-4">
                                <div class="h-12 w-12 rounded-full overflow-hidden mr-4">
                                    <img src="https://randomuser.me/api/portraits/women/43.jpg" alt="Sarah Johnson"
                                        class="w-full h-full object-cover" />
                                </div>
                                <div>
                                    <h4 class="font-bold text-gray-900">Sarah Johnson</h4>
                                    <p class="text-sm text-gray-600">Lagos, Nigeria</p>
                                </div>
                            </div>
                            <div class="text-gray-700">
                                <p class="italic">"After attending the Hope for Nations crusade, my entire family was
                                    transformed. My husband was delivered from addiction, and our marriage was restored
                                    after 8 years of struggle. We now serve as counselors helping other families."</p>
                            </div>
                            <div class="mt-4 flex text-yellow-400">
                                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                    <path
                                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                    <path
                                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                    <path
                                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                    <path
                                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                    <path
                                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                            </div>
                        </div>

                        <!-- Testimonial 2 -->
                        <div
                            class="bg-gray-50 p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow duration-300">
                            <div class="flex items-center mb-4">
                                <div class="h-12 w-12 rounded-full overflow-hidden mr-4">
                                    <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="David Okafor"
                                        class="w-full h-full object-cover" />
                                </div>
                                <div>
                                    <h4 class="font-bold text-gray-900">David Okafor</h4>
                                    <p class="text-sm text-gray-600">Accra, Ghana</p>
                                </div>
                            </div>
                            <div class="text-gray-700">
                                <p class="italic">"I was miraculously healed of stage 4 cancer after Rev. Okoroafor
                                    prayed for me during the 2018 crusade. Doctors confirmed the healing, and I've been
                                    cancer-free for 5 years now. This miracle led my entire village to Christ."</p>
                            </div>
                            <div class="mt-4 flex text-yellow-400">
                                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                    <path
                                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                    <path
                                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                    <path
                                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                    <path
                                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                    <path
                                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                            </div>
                        </div>

                        <!-- Testimonial 3 -->
                        <div
                            class="bg-gray-50 p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow duration-300">
                            <div class="flex items-center mb-4">
                                <div class="h-12 w-12 rounded-full overflow-hidden mr-4">
                                    <img src="https://randomuser.me/api/portraits/women/65.jpg" alt="Grace Mwangi"
                                        class="w-full h-full object-cover" />
                                </div>
                                <div>
                                    <h4 class="font-bold text-gray-900">Grace Mwangi</h4>
                                    <p class="text-sm text-gray-600">Nairobi, Kenya</p>
                                </div>
                            </div>
                            <div class="text-gray-700">
                                <p class="italic">"The School of Revival transformed my ministry. After training, I
                                    returned to my village and started a church that has grown to 500 members. We've
                                    planted 3 daughter churches and seen countless miracles. All glory to God!"</p>
                            </div>
                            <div class="mt-4 flex text-yellow-400">
                                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                    <path
                                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                    <path
                                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                    <path
                                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                    <path
                                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                    <path
                                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Roboto:wght@300;400;500;700&display=swap');

.font-serif {
    font-family: 'Playfair Display', serif;
}

.texture-bg {
    background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
}

.animate-fade-in {
    animation: fadeIn 1s ease-out forwards;
}

.animate-fade-in.delay-100 {
    animation-delay: 0.1s;
}

.animate-fade-in.delay-200 {
    animation-delay: 0.2s;
}

@keyframes fadeIn {
    from {
        opacity: 0;
        transform: translateY(20px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.prose {
    line-height: 1.75;
}

.prose p {
    margin-bottom: 1.5em;
}
</style>