(function (){

		var libros=[{
			"id":"1",
			"precio":"100",
			"titulo":"Harry Potter y la Piedra Filosofal",
			"autor":"JK Rowling",
			"editorial":"Salamandra",
			"descripcion":"Harry Potter se ha quedado huérfano y vive en casa de sus abominables tíos y del insoportable primo Dudley. Harry se siente muy triste y solo, hasta que un buen día recibe una carta que cambiará su vida para siempre. En ella le comunican que ha sido aceptado como alumno en el colegio interno Hogwarts de magia y hechicería. A partir de ese momento, la suerte de Harry da un vuelco espectacular. En esa escuela tan especial aprenderá encantamientos, trucos fabulosos y tácticas de defensa contra las malas artes. Se convertirá en el campeón escolar de quidditch, especie de fútbol aéreo que se juega montado sobre escobas, y se hará un puñado de buenos amigos... aunque también algunos temibles enemigos. Pero sobre todo, conocerá los secretos que le permitirán cumplir con su destino. Pues, aunque no lo parezca a primera vista, Harry no es un chico común y corriente. ¡Es un verdadero mago!",
			images: [
			{id:0,url:'img/harry-01.jpg'}
			]				
		},
		{
			"id":"2",
			"precio":"150",
			"titulo":"Harry Potter y la cámara secreta",
			"autor":"JK Rowling",
			"editorial":"Salamandra",
			"descripcion":"Tras derrotar una vez más a lord Voldemort, su siniestro enemigo en Harry Potter y la piedra filosofal, Harry espera impaciente en casa de sus insoportables tíos el inicio del segundo curso del Colegio Hogwarts de Magia y Hechicería. Sin embargo, la espera dura poco, pues un elfo aparece en su habitación y le advierte que una amenaza mortal se cierne sobre la escuela. Así pues, Harry no se lo piensa dos veces y, acompañado de Ron, su mejor amigo, se dirige a Hogwarts en un coche volador. Pero ¿puede un aprendiz de mago defender la escuela de los malvados que pretenden destruirla? Sin saber que alguien ha abierto la Cámara de los Secretos, dejando escapar una serie de monstruos peligrosos, Harry y sus amigos Ron y Hermione tendrán que enfrentarse con arañas gigantes, serpientes encantadas, fantasmas enfurecidos y, sobre todo, con la mismísima reencarnación de su más temible adversario.",
			images: [
			{id:0,url:'img/harry-02.jpg'}
			]			
		},
		{
			"id":"3",
			"precio":"200",
			"titulo":"Harry Potter y el prisionero de Azkaban",
			"autor":"JK Rowling",
			"editorial":"Salamandra",
			"descripcion":"Por la cicatriz que lleva en la frente, sabemos que Harry Potter no es un niño como los demás, sino el héroe que venció a lord Voldemort, el mago más temible y maligno de todos los tiempos y culpable de la muerte de los padres de Harry. Desde entonces, Harry no tiene más remedio que vivir con sus pesados tíos y su insoportable primo Dudley, todos ellos muggles, o sea, personas no magas, que desprecian a su sobrino debido a sus poderes. Igual que en las dos primeras partes de la serie –La piedra filosofal y La cámara secreta– Harry aguarda con impaciencia el inicio del tercer curso en el Colegio Hogwarts de Magia y Hechicería. Tras haber cumplido los trece años, solo y lejos de sus amigos de Hogwarts, Harry se pelea con su bigotuda tía Marge, a la que convierte en globo, y debe huir en un autobús mágico. Mientras tanto, de la prisión de Azkaban se ha escapado un terrible villano, Sirius Black, un asesino en serie con poderes mágicos que fue cómplice de lord Voldemort y que parece dispuesto a eliminar a Harry del mapa. Y por si esto fuera poco, Harry deberá enfrentarse también a unos terribles monstruos, los dementores, seres abominables capaces de robarles la felicidad a los magos y de borrar todo recuerdo hermoso de aquellos que osan mirarlos. Lo que ninguno de estos malvados personajes sabe es que Harry, con la ayuda de sus fieles amigos Ron y Hermione, es capaz de todo y mucho más. ",
			images: [
			{id:0,url:'img/harry-03.jpg'}
			]			
		},
		{
			"id":"4",
			"precio":"250",
			"titulo":"Harry Potter y el cáliz de fuego",
			"autor":"JK Rowling",
			"editorial":"Salamandra",
			"descripcion":"Tras otro abominable verano con los Dursley, Harry se dispone a iniciar el cuarto curso en Hogwarts, la famosa escuela de magia y hechicería. A sus catorce años, a Harry le gustaría ser un joven mago como los demás y dedicarse a aprender nuevos sortilegios, encontrarse con sus amigos Ron y Hermione y asistir con ellos a los Mundiales de quidditch. Sin embargo, al llegar al colegio le espera una gran sorpresa que lo obligará a enfrentarse a los desafíos más temibles de toda su vida. Si logra superarlos, habrá demostrado que ya no es un niño y que está preparado para vivir las nuevas y emocionantes experiencias que el futuro le depara.",
			images: [
			{id:0,url:'img/harry-04.jpg'}
			]			
		},
		{
			"id":"5",
			"precio":"300",
			"titulo":"Harry Potter y la Orden del Fénix",
			"autor":"JK Rowling",
			"editorial":"Salamandra",
			"descripcion":"Las tediosas vacaciones de verano en casa de sus tíos todavía no han acabado y Harry se encuentra más inquieto que nunca. Apenas ha tenido noticias de Ron y Hermione, y presiente que algo extraño está sucediendo en Hogwarts. En efecto, cuando por fin comienza otro curso en el famoso colegio de magia y hechicería, sus temores se vuelven realidad. El Ministerio de Magia niega que Voldemort haya regresado y ha iniciado una campaña de desprestigio contra Harry y Dumbledore, para lo cual ha asignado a la horrible profesora Dolores Umbridge la tarea de vigilar todos sus movimientos. Así pues, además de sentirse solo e incomprendido, Harry sospecha que Voldemort puede adivinar sus pensamientos, e intuye que el temible mago trata de apoderarse de un objeto secreto que le permitiría recuperar su poder destructivo.",
			images: [
			{id:0,url:'img/harry-05.jpg'}
			]			
		},
		{
			"id":"6",
			"precio":"124",
			"titulo":"Harry Potter y el misterio del príncipe",
			"autor":"JK Rowling",
			"editorial":"Salamandra",
			"descripcion":"Con dieciséis años cumplidos, Harry inicia el sexto curso en Hogwarts en medio de terribles acontecimientos que asolan Inglaterra. Elegido capitán del equipo de Quidditch, los entrenamientos, los exámenes y las chicas ocupan todo su tiempo, pero la tranquilidad dura poco. A pesar de los férreos controles de seguridad que protegen la escuela, dos alumnos son brutalmente atacados. Dumbledore sabe que se acerca el momento, anunciado por la Profecía, en que Harry y Voldemort se enfrentarán a muerte: «El único con poder para vencer al Señor Tenebroso se acerca... Uno de los dos debe morir a manos del otro, pues ninguno de los dos podrá vivir mientras siga el otro con vida.». El anciano director solicitará la ayuda de Harry y juntos emprenderán peligrosos viajes para intentar debilitar al enemigo, para lo cual el joven mago contará con la ayuda de un viejo libro de pociones perteneciente a un misterioso príncipe, alguien que se hace llamar Príncipe Mestizo.",
			images: [
			{id:0,url:'img/harry-06.jpg'}
			]				
		},
		{
			"id":"7",
			"precio":"193",
			"titulo":"Harry Potter y las reliquias de la muerte",
			"autor":"JK Rowling",
			"editorial":"Salamandra",
			"descripcion":"La fecha crucial se acerca. Cuando cumpla diecisiete años, Harry perderá el encantamiento protector que lo mantiene a salvo. El anunciado enfrentamiento a muerte con lord Voldemort es inminente, y la casi imposible misión de encontrar y destruir los restantes Horrocruxes más urgente que nunca. Ha llegado la hora final, el momento de tomar las decisiones más difíciles. Harry debe abandonar la calidez y seguridad de La Madriguera para seguir sin miedo ni vacilaciones el inexorable sendero trazado para él. Consciente de lo mucho que está en juego, sólo dentro de sí mismo encontrará la fuerza necesaria que lo impulse en la vertiginosa carrera para enfrentarse con su destino.",
			images: [
			{id:0,url:'img/harry-07.jpg'}
			]			
		}
		];
		var app = angular.module('bookStoreApp',[]);
	app.controller('BookStoreController', function(){
		this.articulos=libros;
	});

	app.controller('GalleryController',function(){
				this.current = 0;
				
				this.setCurrent = function(imageNumber){
					this.current = imageNumber || 0;
				}
		});
	app.controller('PanelController',function(){
			this.tab = 1;
			this.selectTab = function(setTab){
				this.tab = setTab;
			};
			this.isSelected = function(checkTab){
				return this.tab === checkTab;
			};
		});
})();