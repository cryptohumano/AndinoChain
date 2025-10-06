import './style.css'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <!-- Navigation -->
  <nav class="fixed top-0 w-full z-50 bg-black/20 backdrop-blur-md border-b border-cyan-500/20">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center py-4">
        <div class="flex items-center space-x-3">
          <div class="text-2xl font-bold text-white">
            <span class="text-cyan-400">Andino</span><span class="text-green-400">Chain</span>
          </div>
        </div>
        <div class="hidden md:flex space-x-8">
          <a href="#vision" class="text-white hover:text-cyan-400 transition-colors">Visión</a>
          <a href="#solucion" class="text-white hover:text-cyan-400 transition-colors">Solución</a>
          <a href="#wallet" class="text-white hover:text-cyan-400 transition-colors">Wallet</a>
          <a href="#beneficios" class="text-white hover:text-cyan-400 transition-colors">Beneficios</a>
          <a href="#comunidad" class="text-white hover:text-cyan-400 transition-colors">Comunidad</a>
        </div>
      </div>
    </div>
  </nav>

  <!-- Hero Section -->
  <section class="min-h-screen flex items-center gradient-mountain relative overflow-hidden">
    <div class="absolute inset-0 bg-gradient-to-r from-teal-900/50 to-blue-900/50"></div>
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div class="grid lg:grid-cols-2 gap-12 items-center">
        <!-- Left: Mountain Illustration -->
        <div class="relative">
          <div class="relative w-full h-96 lg:h-[500px]">
            <img src="/2.png" alt="AndinoChain Hero" class="w-full h-full object-cover rounded-lg shadow-2xl" />
            <div class="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent rounded-lg"></div>
          </div>
        </div>
        
        <!-- Right: Text Content -->
        <div class="text-white space-y-6">
          <h1 class="text-4xl lg:text-6xl font-bold leading-tight">
            <span class="block">AndinoChain:</span>
            <span class="block">Escalando</span>
            <span class="block">Juntos con la</span>
            <span class="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-green-400">Tecnología Blockchain</span>
          </h1>
          <p class="text-lg lg:text-xl text-gray-300 leading-relaxed">
            Una revolución tecnológica para el andinismo chileno que transforma cada cumbre en un logro verificable e inmutable.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 pt-4">
            <button id="explore-btn" class="bg-gradient-to-r from-cyan-500 to-green-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-green-600 transition-all duration-300 transform hover:scale-105" onclick="scrollToWalletAction()">
              Explorar Proyecto
            </button>
            <button id="demo-btn" class="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300">
              Ver Demo
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Vision Section -->
  <section id="vision" class="py-20 bg-gradient-to-b from-teal-900 to-blue-900">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <h2 class="text-4xl lg:text-5xl font-bold text-white mb-6">
          Una Visión que Cambia el Futuro del Montañismo
        </h2>
      </div>
      
      <div class="bg-green-800/30 border border-green-500/30 rounded-xl p-8 mb-12">
        <p class="text-lg text-white leading-relaxed">
          <span class="font-bold">La Federación de Andinismo de Chile ya confía en nosotros.</span> AndinoChain no es un futuro lejano; es el paso revolucionario que estamos dando hoy, en este momento histórico para el montañismo nacional.
        </p>
      </div>
      
      <div class="grid lg:grid-cols-2 gap-12 items-center">
        <div class="space-y-6">
          <p class="text-lg text-gray-300 leading-relaxed">
            Somos Web3 Chile, y hemos unido fuerzas con la Federación de Andinismo de Chile para lanzar un proyecto pionero: AndinoChain. Esta alianza estratégica marca un antes y un después en cómo documentamos y certificamos las hazañas de montaña.
          </p>
          <p class="text-lg text-gray-300 leading-relaxed">
            Nuestro objetivo es ambicioso pero claro: llevar la Identidad Digital Soberana y la mejor tecnología blockchain a cada andinista del país. No se trata simplemente de digitalizar registros; estamos garantizando la verdad de cada cumbre, de cada esfuerzo, de cada logro en la cordillera.
          </p>
        </div>
        
        <div class="relative">
          <div class="relative w-full h-96">
            <img src="/3.png" alt="Visión AndinoChain" class="w-full h-full object-cover rounded-lg shadow-xl" />
            <div class="absolute inset-0 bg-gradient-to-l from-black/30 to-transparent rounded-lg"></div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Solution Section -->
  <section id="solucion" class="py-20 bg-gradient-to-b from-blue-900 to-teal-900">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <h2 class="text-4xl lg:text-5xl font-bold text-white mb-6">
          AndinoChain: La Solución Tecnológica Definitiva
        </h2>
        <p class="text-xl text-gray-300 max-w-4xl mx-auto">
          AndinoChain es un libro de registros inmutable y transparente, construido sobre los pilares de las mejores experiencias mundiales de registro como Andeshandbook e Himalayan Database, pero llevado a la revolucionaria era de la Web3.
        </p>
      </div>
      
      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
        <div class="text-center space-y-4">
          <div class="w-16 h-16 bg-gradient-to-r from-cyan-500 to-green-500 rounded-full flex items-center justify-center mx-auto">
            <span class="text-2xl font-bold text-white">1°</span>
          </div>
          <h3 class="text-xl font-bold text-white">Fundamentos Probados</h3>
          <p class="text-gray-300">Andeshandbook e Himalayan Database</p>
        </div>
        
        <div class="text-center space-y-4">
          <div class="w-16 h-16 bg-gradient-to-r from-cyan-500 to-green-500 rounded-full flex items-center justify-center mx-auto">
            <span class="text-2xl font-bold text-white">🔗</span>
          </div>
          <h3 class="text-xl font-bold text-white">Tecnología Blockchain</h3>
          <p class="text-gray-300">Registros inmutables y transparentes</p>
        </div>
        
        <div class="text-center space-y-4">
          <div class="w-16 h-16 bg-gradient-to-r from-cyan-500 to-green-500 rounded-full flex items-center justify-center mx-auto">
            <span class="text-2xl font-bold text-white">🆔</span>
          </div>
          <h3 class="text-xl font-bold text-white">Identidad Soberana</h3>
          <p class="text-gray-300">Control total del andinista sobre sus datos</p>
        </div>
        
        <div class="text-center space-y-4">
          <div class="w-16 h-16 bg-gradient-to-r from-cyan-500 to-green-500 rounded-full flex items-center justify-center mx-auto">
            <span class="text-2xl font-bold text-white">🏆</span>
          </div>
          <h3 class="text-xl font-bold text-white">Certificación Digital</h3>
          <p class="text-gray-300">Tokens verificables de cada cumbre</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Wallet Section -->
  <section id="wallet" class="py-20 bg-gradient-to-b from-teal-900 to-blue-900">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <h2 class="text-4xl lg:text-5xl font-bold text-white mb-6">
          Andino Wallet: Tu Identidad, Tu Control
        </h2>
        <h3 class="text-2xl font-semibold text-cyan-400 mb-8">
          Identidad Digital Autosoberana
        </h3>
      </div>
      
      <div class="grid lg:grid-cols-2 gap-12 items-center">
        <div class="space-y-6">
          <p class="text-lg text-gray-300 leading-relaxed">
            Cuando escalas, te documentas y compartes tu logro, no es solo un registro más en una base de datos. Es una evidencia digital firmada criptográficamente por ti, con tu identidad única y verificable.
          </p>
          
          <div class="space-y-4">
            <h4 class="text-xl font-bold text-white">Esto significa que:</h4>
            <ul class="space-y-3">
              <li class="flex items-start space-x-3">
                <div class="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                <span class="text-gray-300">Tú decides qué información compartir y con quién</span>
              </li>
              <li class="flex items-start space-x-3">
                <div class="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                <span class="text-gray-300">Nadie puede suplantar tu identidad</span>
              </li>
              <li class="flex items-start space-x-3">
                <div class="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                <span class="text-gray-300">Tus datos personales nunca salen de tu dispositivo sin tu autorización explícita</span>
              </li>
              <li class="flex items-start space-x-3">
                <div class="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                <span class="text-gray-300">Tu historial de montaña te pertenece completamente</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div class="relative">
          <div class="relative w-full h-96">
            <img src="/4.png" alt="Andino Wallet" class="w-full h-full object-cover rounded-lg shadow-xl" />
            <div class="absolute inset-0 bg-gradient-to-l from-black/20 to-transparent rounded-lg"></div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Wallet in Action Section -->
  <section id="wallet-action" class="py-20 bg-gradient-to-b from-gray-900 to-blue-900">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <h2 class="text-4xl lg:text-5xl font-bold text-white mb-6">
          Andino Wallet en Acción
        </h2>
        <p class="text-xl text-gray-300 max-w-3xl mx-auto">
          Descubre cómo funciona Andino Wallet a través de nuestras capturas de pantalla del prototipo móvil
        </p>
      </div>
      
      <div class="grid lg:grid-cols-2 gap-12 items-center">
        <div class="space-y-6">
          <div class="bg-gradient-to-r from-cyan-900/30 to-green-900/30 border border-cyan-500/30 rounded-xl p-6">
            <h3 class="text-xl font-bold text-white mb-4">📱 Prototipo Funcional</h3>
            <p class="text-gray-300 leading-relaxed">
              Estas capturas muestran el desarrollo real de Andino Wallet, donde cada funcionalidad está siendo probada y refinada para ofrecer la mejor experiencia de usuario.
            </p>
          </div>
          
          <div class="bg-gradient-to-r from-yellow-900/30 to-orange-900/30 border border-yellow-500/30 rounded-xl p-6">
            <h3 class="text-xl font-bold text-white mb-4">🔧 En Desarrollo Activo</h3>
            <p class="text-gray-300 leading-relaxed">
              Cada pantalla representa horas de desarrollo y testing, construyendo la primera wallet de identidad digital autosoberana para el andinismo chileno.
            </p>
          </div>
        </div>
        
        <div class="relative">
          <!-- Phone Mockup Container with Carousel -->
          <div class="relative mx-auto w-80 h-[600px] bg-gray-800 rounded-[3rem] p-4 shadow-2xl">
            <!-- Phone Screen -->
            <div class="w-full h-full bg-white rounded-[2rem] overflow-hidden relative">
              <!-- Screenshot Carousel -->
              <div id="screenshot-carousel" class="w-full h-full relative">
                <!-- Screenshot 1 -->
                <div class="screenshot-slide active">
                  <img src="/logos/pantalla1.png" alt="Andino Wallet - Pantalla 1" class="w-full h-full object-cover" />
                </div>
                
                <!-- Screenshot 2 -->
                <div class="screenshot-slide">
                  <img src="/logos/pantalla2.png" alt="Andino Wallet - Pantalla 2" class="w-full h-full object-cover" />
                </div>
                
                <!-- Screenshot 3 -->
                <div class="screenshot-slide">
                  <img src="/logos/pantalla3.png" alt="Andino Wallet - Pantalla 3" class="w-full h-full object-cover" />
                </div>
                
                <!-- Screenshot 4 -->
                <div class="screenshot-slide">
                  <img src="/logos/pantalla4.png" alt="Andino Wallet - Pantalla 4" class="w-full h-full object-cover" />
                </div>
              </div>
              
              <!-- Overlay with app name -->
              <div class="absolute top-4 left-4 right-4 bg-black/70 backdrop-blur-sm rounded-lg p-2">
                <div class="text-white text-sm font-semibold text-center">Andino Wallet</div>
              </div>
              
              <!-- Navigation Dots -->
              <div class="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                <button class="carousel-dot active w-2 h-2 bg-white rounded-full opacity-100" data-slide="0" onclick="showScreenshot(0)"></button>
                <button class="carousel-dot w-2 h-2 bg-white rounded-full opacity-50" data-slide="1" onclick="showScreenshot(1)"></button>
                <button class="carousel-dot w-2 h-2 bg-white rounded-full opacity-50" data-slide="2" onclick="showScreenshot(2)"></button>
                <button class="carousel-dot w-2 h-2 bg-white rounded-full opacity-50" data-slide="3" onclick="showScreenshot(3)"></button>
              </div>
            </div>
            
            <!-- Phone Home Button -->
            <div class="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-gray-600 rounded-full"></div>
          </div>
          
          <!-- Floating Elements -->
          <div class="absolute -top-4 -right-4 bg-gradient-to-r from-cyan-500 to-green-500 text-white px-4 py-2 rounded-full text-sm font-semibold animate-pulse">
            🚀 En Desarrollo
          </div>
          
          <!-- Navigation Arrows -->
          <button id="prev-slide" class="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-all duration-300" onclick="prevScreenshot()">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
            </svg>
          </button>
          
          <button id="next-slide" class="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-all duration-300" onclick="nextScreenshot()">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  </section>

  <!-- Community Section -->
  <section id="comunidad" class="py-20 bg-gradient-to-b from-blue-900 to-teal-900">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <h2 class="text-4xl lg:text-5xl font-bold text-white mb-6">
          El Corazón de la Montaña: La Comunidad Andinista Chilena
        </h2>
      </div>
      
      <!-- Estado del Proyecto -->
      <div class="text-center mb-16">
        <div class="bg-gradient-to-r from-yellow-900/30 to-orange-900/30 border border-yellow-500/30 rounded-xl p-8 max-w-4xl mx-auto">
          <div class="flex items-center justify-center mb-4">
            <div class="w-3 h-3 bg-yellow-400 rounded-full mr-3 animate-pulse"></div>
            <h3 class="text-2xl font-bold text-yellow-400">🚀 Prototipo en Desarrollo</h3>
          </div>
          <p class="text-gray-300 text-lg mb-6">
            AndinoChain está construyendo la primera plataforma de identidad digital autosoberana para el andinismo chileno. 
            <span class="text-yellow-300 font-semibold">Sé parte de la revolución desde el inicio.</span>
          </p>
          
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div class="bg-gradient-to-r from-cyan-500/20 to-green-500/20 border border-cyan-500/30 rounded-lg p-4">
              <div class="text-3xl font-bold text-cyan-400 mb-2">0</div>
              <div class="text-sm text-gray-300">Ascensiones Registradas</div>
              <div class="text-xs text-gray-400 mt-1">¡Sé el primero!</div>
            </div>
            
            <div class="bg-gradient-to-r from-green-500/20 to-teal-500/20 border border-green-500/30 rounded-lg p-4">
              <div class="text-3xl font-bold text-green-400 mb-2">0</div>
              <div class="text-sm text-gray-300">Usuarios Activos</div>
              <div class="text-xs text-gray-400 mt-1">Únete ahora</div>
            </div>
            
            <div class="bg-gradient-to-r from-teal-500/20 to-blue-500/20 border border-teal-500/30 rounded-lg p-4">
              <div class="text-3xl font-bold text-teal-400 mb-2">∞</div>
              <div class="text-sm text-gray-300">Potencial de Crecimiento</div>
              <div class="text-xs text-gray-400 mt-1">Comunidad ilimitada</div>
            </div>
          </div>
        </div>
      </div>
      
      <div class="grid lg:grid-cols-2 gap-12 items-center">
        <div class="space-y-6">
          <div class="bg-gradient-to-r from-cyan-900/30 to-green-900/30 border border-cyan-500/30 rounded-xl p-6">
            <h3 class="text-xl font-bold text-white mb-4">🏔️ Una Comunidad Vibrante</h3>
            <p class="text-gray-300 leading-relaxed">
              Cada fin de semana, con la mochila al hombro y la mirada en la cumbre, estos apasionados exploradores se lanzan a conquistar nuevos desafíos, forjando historias de esfuerzo y superación que merecen ser preservadas para siempre.
            </p>
          </div>
          
          <div class="bg-gradient-to-r from-yellow-900/30 to-orange-900/30 border border-yellow-500/30 rounded-xl p-6">
            <h3 class="text-xl font-bold text-white mb-4">⚠️ El Desafío Actual</h3>
            <p class="text-gray-300 leading-relaxed">
              Detrás de cada logro majestuoso, existe una realidad cotidiana menos épica: la ardua tarea de documentar y verificar cada ascensión. Proyectos como <a href="https://www.andeshandbook.org/" target="_blank" class="text-cyan-400 hover:text-cyan-300 underline">Andeshandbook</a> y <a href="https://www.himalayandatabase.com/" target="_blank" class="text-blue-400 hover:text-blue-300 underline">Himalayan Database</a> han demostrado el valor de mantener registros digitales, pero aún falta el paso hacia la <span class="text-yellow-300 font-semibold">identidad digital autosoberana</span> que AndinoChain propone.
            </p>
          </div>
        </div>
        
        <div class="relative">
          <div class="relative w-full h-96">
            <img src="/5.png" alt="Comunidad Andinista" class="w-full h-full object-cover rounded-lg shadow-xl" />
            <div class="absolute inset-0 bg-gradient-to-l from-black/20 to-transparent rounded-lg"></div>
            
            <!-- Overlay con mensaje motivacional -->
            <div class="absolute bottom-4 left-4 bg-black/70 backdrop-blur-sm rounded-lg p-4">
              <div class="text-lg font-bold text-yellow-400">🚀 ¡Sé pionero!</div>
              <div class="text-sm text-white">Únete a la revolución</div>
              <div class="text-xs text-gray-300">desde el inicio</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Testing Evidence Section -->
  <section class="py-20 bg-gradient-to-b from-teal-900 to-blue-900">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <div class="inline-flex items-center px-4 py-2 bg-yellow-500/20 border border-yellow-500/30 rounded-full mb-6">
          <div class="w-2 h-2 bg-yellow-400 rounded-full mr-2 animate-pulse"></div>
          <span class="text-yellow-300 font-semibold">Prototipo en Desarrollo</span>
        </div>
        <h2 class="text-4xl lg:text-5xl font-bold text-white mb-6">
          Evidencia de Testing
        </h2>
        <p class="text-xl text-gray-300 max-w-3xl mx-auto">
          Documentación técnica del desarrollo del prototipo de Andino Wallet construido sobre Substrate
        </p>
      </div>
      
      <div class="grid lg:grid-cols-2 gap-12 items-center">
        <div class="space-y-6">
          <div class="bg-gradient-to-r from-cyan-900/30 to-green-900/30 border border-cyan-500/30 rounded-xl p-6">
            <h3 class="text-2xl font-bold text-white mb-4">Logbook de Testing - Prototipo Substrate</h3>
            <p class="text-gray-300 mb-6">
              Documento técnico que registra el desarrollo y testing del prototipo de Andino Wallet construido sobre Substrate, incluyendo:
            </p>
            <ul class="space-y-3 text-gray-300">
              <li class="flex items-start space-x-3">
                <div class="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                <span><strong>Generación de firmas criptográficas</strong> - Implementación exitosa</span>
              </li>
              <li class="flex items-start space-x-3">
                <div class="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></div>
                <span><strong>Encriptación punto a punto</strong> - En desarrollo</span>
              </li>
              <li class="flex items-start space-x-3">
                <div class="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></div>
                <span><strong>Interacción con runtime</strong> - En desarrollo</span>
              </li>
              <li class="flex items-start space-x-3">
                <div class="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                <span><strong>Arquitectura Substrate</strong> - Base sólida implementada</span>
              </li>
            </ul>
          </div>
          
          <div class="flex flex-col sm:flex-row gap-4">
            <button onclick="openPDF()" class="bg-gradient-to-r from-cyan-500 to-green-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-green-600 transition-all duration-300 transform hover:scale-105 relative overflow-hidden group">
              <span class="relative z-10">Ver Logbook Completo</span>
              <div class="absolute inset-0 bg-gradient-to-r from-cyan-400 to-green-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            <button onclick="alert('La apk testing estará disponible próximamente cuando el prototipo esté finalizado, regresa en Noviembre ;)')" class="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300">
              Próximamente
            </button>
          </div>
        </div>
        
        <div class="relative">
          <div class="bg-gradient-to-b from-cyan-900/30 to-green-900/30 border border-cyan-500/30 rounded-xl p-8 text-center">
            <div class="w-24 h-24 bg-gradient-to-r from-cyan-500 to-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg class="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
              </svg>
            </div>
            <h4 class="text-xl font-bold text-white mb-4">Prototipo Substrate</h4>
            <p class="text-gray-300 mb-6">
              Documentación técnica completa del desarrollo del prototipo de Andino Wallet, construido sobre la arquitectura Substrate con capacidades avanzadas de criptografía.
            </p>
            <div class="flex items-center justify-center space-x-4 text-sm text-gray-400">
              <span class="flex items-center space-x-1">
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path>
                </svg>
                <span>PDF</span>
              </span>
              <span class="flex items-center space-x-1">
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd"></path>
                </svg>
                <span>Testing</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Partners & Logos Section -->
  <section class="py-16 bg-gradient-to-b from-blue-900 to-teal-900">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-12">
        <h2 class="text-3xl lg:text-4xl font-bold text-white mb-4">
          Tecnología y Alianzas
        </h2>
        <p class="text-lg text-gray-300 max-w-3xl mx-auto">
          Organizaciones y empresas que confían en nuestra visión tecnológica para el futuro del andinismo
    </p>
  </div>
      
      <!-- Logos Grid -->
      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-8 items-center justify-items-center">
        <!-- Logo 1: Peranto (Desarrollador Principal) -->
        <div class="bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-500/30 rounded-lg p-4 w-full h-24 flex items-center justify-center hover:bg-purple-500/30 transition-all duration-300">
          <img src="/logos/peranto_PoC_logos_Mesa de trabajo 1 copia 2 (1).png" alt="Peranto - Desarrollador Principal" class="max-h-16 max-w-full object-contain" />
        </div>
        
        <!-- Logo 2: Kilt Protocol -->
        <div class="bg-white/10 backdrop-blur-sm rounded-lg p-4 w-full h-24 flex items-center justify-center hover:bg-white/20 transition-all duration-300">
          <img src="/logos/logokiltviejo.png" alt="Kilt Protocol" class="max-h-16 max-w-full object-contain" />
        </div>
        
        <!-- Logo 3: Latin Hack -->
        <div class="bg-white/10 backdrop-blur-sm rounded-lg p-4 w-full h-24 flex items-center justify-center hover:bg-white/20 transition-all duration-300">
          <img src="/logos/logolatinhack.png" alt="Latin Hack" class="max-h-16 max-w-full object-contain" />
        </div>
        
        <!-- Logo 4: Nerd -->
        <div class="bg-white/10 backdrop-blur-sm rounded-lg p-4 w-full h-24 flex items-center justify-center hover:bg-white/20 transition-all duration-300">
          <img src="/logos/logonerd.png" alt="Nerd" class="max-h-16 max-w-full object-contain" />
        </div>
        
        <!-- Logo 5: Sub0 -->
        <div class="bg-white/10 backdrop-blur-sm rounded-lg p-4 w-full h-24 flex items-center justify-center hover:bg-white/20 transition-all duration-300">
          <img src="/logos/logosub0.png" alt="Sub0" class="max-h-16 max-w-full object-contain" />
        </div>
        
        <!-- Logo 6: Polkadot -->
        <div class="bg-white/10 backdrop-blur-sm rounded-lg p-4 w-full h-24 flex items-center justify-center hover:bg-white/20 transition-all duration-300">
          <img src="/logos/Polkadot_Logo_Pink-Black.png" alt="Polkadot" class="max-h-16 max-w-full object-contain" />
        </div>
        
      </div>
      
      <!-- Featured Partner - Federación de Andinismo de Chile -->
      <div class="mt-12 flex justify-center">
        <a href="https://marmolejo.feach.cl/" target="_blank" class="block w-full max-w-md">
          <div class="bg-gradient-to-r from-cyan-500/20 to-green-500/20 border-2 border-cyan-500/50 rounded-xl p-8 w-full hover:from-cyan-500/30 hover:to-green-500/30 transition-all duration-300 transform hover:scale-105 cursor-pointer">
            <div class="text-center">
              <div class="mb-4">
                <img src="/logos/logo-feach.png" alt="Federación de Andinismo de Chile" class="max-h-20 max-w-full object-contain mx-auto" />
              </div>
              <h3 class="text-lg font-bold text-white mb-2">Federación de Andinismo de Chile</h3>
              <p class="text-sm text-cyan-300">Nuestro Usuario y Aliado Principal</p>
              <p class="text-xs text-gray-400 mt-2">Visitar sitio web →</p>
            </div>
          </div>
        </a>
      </div>
      
      <!-- Additional logos row -->
      <div class="mt-8 grid grid-cols-3 md:grid-cols-5 gap-6 items-center justify-items-center">
        <div class="bg-gradient-to-r from-cyan-500/20 to-green-500/20 border border-cyan-500/30 rounded-lg p-3 w-full h-16 flex items-center justify-center">
          <div class="text-cyan-400 text-xs font-bold">TECH PARTNER</div>
        </div>
        
        <div class="bg-gradient-to-r from-cyan-500/20 to-green-500/20 border border-cyan-500/30 rounded-lg p-3 w-full h-16 flex items-center justify-center">
          <div class="text-cyan-400 text-xs font-bold">INNOVATION</div>
        </div>
        
        <div class="bg-gradient-to-r from-cyan-500/20 to-green-500/20 border border-cyan-500/30 rounded-lg p-3 w-full h-16 flex items-center justify-center">
          <div class="text-cyan-400 text-xs font-bold">WEB3</div>
        </div>
        
        <div class="bg-gradient-to-r from-cyan-500/20 to-green-500/20 border border-cyan-500/30 rounded-lg p-3 w-full h-16 flex items-center justify-center">
          <div class="text-cyan-400 text-xs font-bold">BLOCKCHAIN</div>
        </div>
        
        <div class="bg-gradient-to-r from-cyan-500/20 to-green-500/20 border border-cyan-500/30 rounded-lg p-3 w-full h-16 flex items-center justify-center">
          <div class="text-cyan-400 text-xs font-bold">MOUNTAINEERING</div>
        </div>
      </div>
    </div>
  </section>

  <!-- Team Section -->
  <section class="py-20 bg-gradient-to-b from-blue-900 to-teal-900">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <h2 class="text-4xl lg:text-5xl font-bold text-white mb-6">
          El Equipo Detrás de la Revolución
        </h2>
        <p class="text-xl text-gray-300 max-w-3xl mx-auto">
          Un equipo multidisciplinario que combina décadas de experiencia en montañismo con expertise en tecnología blockchain
        </p>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <!-- Carolina Palma -->
        <div class="bg-gradient-to-b from-gray-800/30 to-gray-700/30 border border-gray-600/30 rounded-xl p-6 text-center hover:border-cyan-500/50 transition-all duration-300">
          <div class="w-20 h-20 rounded-full overflow-hidden mx-auto mb-4 border-2 border-cyan-500/30">
            <img src="/logos/carolina.png" alt="Carolina Palma" class="w-full h-full object-cover" />
          </div>
          <h3 class="text-xl font-bold text-white mb-2">Carolina Palma</h3>
          <p class="text-cyan-400 font-semibold mb-3">Montañista Experta</p>
          <p class="text-gray-300 text-sm mb-4">
            20 años de experiencia en montañas chilenas y expediciones, la experiencia de usuario empieza en la sistematización de logros y expediciones. 
          </p>
          <div class="flex justify-center space-x-2">
            <span class="bg-cyan-500/20 text-cyan-400 px-2 py-1 rounded text-xs">🏔️ Montañismo</span>
            <span class="bg-green-500/20 text-green-400 px-2 py-1 rounded text-xs">📚 Experiencia</span>
          </div>
        </div>
        
        <!-- Francisco Albornoz -->
        <div class="bg-gradient-to-b from-gray-800/30 to-gray-700/30 border border-gray-600/30 rounded-xl p-6 text-center hover:border-blue-500/50 transition-all duration-300">
          <div class="w-20 h-20 rounded-full overflow-hidden mx-auto mb-4 border-2 border-blue-500/30">
            <img src="/logos/francisco.jpg" alt="Francisco Albornoz" class="w-full h-full object-cover" />
          </div>
          <h3 class="text-xl font-bold text-white mb-2">Francisco Albornoz</h3>
          <p class="text-blue-400 font-semibold mb-3">Web3 Chile</p>
          <p class="text-gray-300 text-sm mb-4">
            Líder en ecosistema Web3 chileno y promotor de adopción blockchain. Agente de Polkadot para Chile y América Latina.
          </p>
          <div class="flex justify-center space-x-2">
            <span class="bg-blue-500/20 text-blue-400 px-2 py-1 rounded text-xs">🌐 Web3</span>
            <span class="bg-purple-500/20 text-purple-400 px-2 py-1 rounded text-xs">🚀 Innovación</span>
          </div>
        </div>
        
        <!-- César Escobedo -->
        <div class="bg-gradient-to-b from-gray-800/30 to-gray-700/30 border border-gray-600/30 rounded-xl p-6 text-center hover:border-teal-500/50 transition-all duration-300">
          <div class="w-20 h-20 rounded-full overflow-hidden mx-auto mb-4 border-2 border-teal-500/30">
            <img src="/logos/cesar.png" alt="César Escobedo" class="w-full h-full object-cover" />
          </div>
          <h3 class="text-xl font-bold text-white mb-2">César Escobedo</h3>
          <p class="text-teal-400 font-semibold mb-3">Polkadot Agent</p>
          <p class="text-gray-300 text-sm mb-4">
            Experto en ecosistema Polkadot, educador tecnológico y creador de contenido para Polkadot en América Latina. 
          </p>
          <div class="flex justify-center space-x-2">
            <span class="bg-teal-500/20 text-teal-400 px-2 py-1 rounded text-xs">🔗 Polkadot</span>
            <span class="bg-cyan-500/20 text-cyan-400 px-2 py-1 rounded text-xs">⚡ Blockchain</span>
          </div>
        </div>
        
        <!-- Edgar Salinas -->
        <div class="bg-gradient-to-b from-gray-800/30 to-gray-700/30 border border-gray-600/30 rounded-xl p-6 text-center hover:border-green-500/50 transition-all duration-300">
          <div class="w-20 h-20 rounded-full overflow-hidden mx-auto mb-4 border-2 border-green-500/30">
            <img src="/logos/edgar-salinas.jpg" alt="Edgar Salinas" class="w-full h-full object-cover" />
          </div>
          <h3 class="text-xl font-bold text-white mb-2">Edgar Salinas</h3>
          <p class="text-green-400 font-semibold mb-3">Fundador Peranto</p>
          <p class="text-gray-300 text-sm mb-4">
            Desarrollador principal y arquitecto de soluciones blockchain, experto en identidad digital autosoberana.
          </p>
          <div class="flex justify-center space-x-2 mb-4">
            <span class="bg-green-500/20 text-green-400 px-2 py-1 rounded text-xs">💻 Desarrollo</span>
            <span class="bg-teal-500/20 text-teal-400 px-2 py-1 rounded text-xs">🏗️ Arquitectura</span>
          </div>
          <a href="https://www.linkedin.com/in/edgardanielsalinasledesma/" target="_blank" class="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors duration-300">
            <svg class="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
            LinkedIn
          </a>
        </div>
      </div>
      
      <!-- Team Stats -->
      <div class="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
        <div class="text-center">
          <div class="text-3xl font-bold text-cyan-400 mb-2">4</div>
          <div class="text-sm text-gray-300">Expertos</div>
        </div>
        <div class="text-center">
          <div class="text-3xl font-bold text-green-400 mb-2">20+</div>
          <div class="text-sm text-gray-300">Años Experiencia</div>
        </div>
        <div class="text-center">
          <div class="text-3xl font-bold text-teal-400 mb-2">3</div>
          <div class="text-sm text-gray-300">Ecosistemas</div>
        </div>
        <div class="text-center">
          <div class="text-3xl font-bold text-blue-400 mb-2">∞</div>
          <div class="text-sm text-gray-300">Pasión</div>
        </div>
      </div>
    </div>
  </section>

  <!-- Call to Action Section -->
  <section class="py-20 bg-gradient-to-b from-teal-900 to-blue-900">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h2 class="text-4xl lg:text-5xl font-bold text-white mb-6">
        Escalemos Juntos Hacia el Futuro
      </h2>
      
      <p class="text-xl text-gray-300 mb-12 max-w-4xl mx-auto">
        Estamos construyendo un ecosistema Web3 completo para el andinismo chileno, donde cada cumbre cuenta, cada esfuerzo se reconoce y cada logro permanece grabado para siempre en la historia digital de nuestras montañas.
      </p>
      <p class="text-xl text-gray-300 mb-8">
        Somos Web3 Chile, y con AndinoChain, la historia de la montaña se escribe para siempre.
      </p>
      
      <!-- Formulario de Registro de Interés -->
      <div class="bg-gradient-to-r from-gray-800/50 to-gray-700/50 border border-gray-600/30 rounded-xl p-8 max-w-4xl mx-auto">
        <h4 class="text-2xl font-bold text-white mb-4 text-center">🎯 ¿Listo para Escalar?</h4>
        <p class="text-gray-300 text-lg mb-8 text-center">
          Regístrate para recibir actualizaciones exclusivas y ser de los primeros en probar AndinoChain cuando esté listo
        </p>
        
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <button onclick="openInterestForm()" class="bg-gradient-to-r from-cyan-500 to-green-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-green-600 transition-all duration-300 transform hover:scale-105 relative overflow-hidden group">
            <span class="relative z-10">🚀 Registrar Mi Interés</span>
            <div class="absolute inset-0 bg-gradient-to-r from-cyan-400 to-green-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
          
          <button onclick="openWaitlistForm()" class="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300">
            📋 Lista de Espera
          </button>
        </div>
        
        <p class="text-gray-500 text-sm mt-6 text-center">
          * Sin spam. Solo actualizaciones importantes del proyecto y acceso prioritario al lanzamiento.
        </p>
      </div>
    </div>
  </section>

  <!-- Footer -->
  <footer class="bg-black/50 backdrop-blur-md border-t border-cyan-500/20 py-8">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex flex-col md:flex-row justify-between items-center">
        <div class="flex items-center space-x-3 mb-4 md:mb-0">
          
          <div class="text-2xl font-bold text-white">
            <span class="text-cyan-400">Andino</span><span class="text-green-400">Chain</span>
          </div>
        </div>
        <div class="flex items-center">
          <a href="https://github.com/cryptohumano/aura-ssi-wallet-initial-polkadot-config-android/tree/backup-before-cleanup" target="_blank" class="text-gray-400 hover:text-cyan-400 transition-colors flex items-center space-x-2">
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            <span>GitHub</span>
          </a>
        </div>
      </div>
      <div class="border-t border-gray-700 mt-8 pt-8 text-center">
        <p class="text-gray-400 text-sm">
          © 2025 Web3 Chile & Federación de Andinismo de Chile. Todos los derechos reservados.
        </p>
        <p class="text-gray-500 text-xs mt-2">
          Prototipo de Andino Wallet - Solución de Identidad Digital Autosoberana para el Andinismo Chileno
        </p>
        <div class="mt-4 flex items-center justify-center space-x-2">
          <span class="text-gray-500 text-xs">Asegurado por Polkadot, construido en Kilt, desarrollado y licenciado por Peranto</span>
          
        </div>
      </div>
    </div>
  </footer>
`

// Add JavaScript functionality
document.addEventListener('DOMContentLoaded', () => {
  // Demo button functionality
  const demoButton = document.getElementById('demo-btn');
  if (demoButton) {
    demoButton.addEventListener('click', () => {
      window.open('https://youtu.be/eOGxZ8nWW3w', '_blank');
    });
  }

  // Explore button functionality
  const exploreButton = document.getElementById('explore-btn');
  if (exploreButton) {
    exploreButton.addEventListener('click', () => {
      document.getElementById('vision')?.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    });
  }

  // Smooth scrolling for navigation links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      e.preventDefault();
      const href = anchor.getAttribute('href');
      const target = href ? document.querySelector(href) : null;
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
});

// Global functions for navigation
(window as any).scrollToWalletAction = () => {
  // Add a small delay to ensure DOM is ready
  setTimeout(() => {
    const element = document.getElementById('wallet-action');
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    } else {
      console.error('Element with id "wallet-action" not found');
      // Fallback: try to find the section by class
      const sections = document.querySelectorAll('section');
      sections.forEach(section => {
        if (section.textContent.includes('Andino Wallet en Acción')) {
          section.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    }
  }, 100);
};
(window as any).openPDF = () => {
  window.open('https://drive.google.com/file/d/1naxcg6jOwrDBZDu-O4K5fudT3z6i8qaO/view?usp=sharing', '_blank');
};

(window as any).downloadPDF = () => {
  alert('El PDF completo estará disponible próximamente cuando el prototipo esté finalizado.');
};

// Global functions for interest forms
(window as any).openInterestForm = () => {
  window.open('https://forms.gle/MuPghG2kjQnjTkMv8', '_blank');
};

(window as any).openWaitlistForm = () => {
  window.open('https://forms.gle/MuPghG2kjQnjTkMv8', '_blank');
};

// Global functions for screenshot carousel
(window as any).currentScreenshot = 0;

(window as any).showScreenshot = (index: number) => {
  const slides = document.querySelectorAll('.screenshot-slide');
  const dots = document.querySelectorAll('.carousel-dot');
  
  // Hide all slides
  slides.forEach(slide => slide.classList.remove('active'));
  dots.forEach(dot => dot.classList.remove('active'));
  
  // Show current slide
  if (slides[index]) {
    slides[index].classList.add('active');
  }
  if (dots[index]) {
    dots[index].classList.add('active');
  }
  
  (window as any).currentScreenshot = index;
};

(window as any).nextScreenshot = () => {
  const slides = document.querySelectorAll('.screenshot-slide');
  const next = ((window as any).currentScreenshot + 1) % slides.length;
  (window as any).showScreenshot(next);
};

(window as any).prevScreenshot = () => {
  const slides = document.querySelectorAll('.screenshot-slide');
  const prev = ((window as any).currentScreenshot - 1 + slides.length) % slides.length;
  (window as any).showScreenshot(prev);
};

// Auto-play functionality
setInterval(() => {
  (window as any).nextScreenshot();
}, 5000);