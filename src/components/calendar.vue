<template>
<div class="Card">
<h2>SEPTEMBER</h2>
<div class="accordion" role="tablist">
    <b-card no-body class="mb-1">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button block v-b-toggle.accordion-1 > DAY 1</b-button>
      </b-card-header>
      <b-collapse id="accordion-1" visible accordion="my-accordion" role="tabpanel">
        <b-card-body>
        <div class="include"> <b-card-text>U1 and U4 in AJ Katzenmaier 9:30 a.m</b-card-text>
          <router-link :to="'/chat/'+'1'"> <i class="bx bx-chat" style='color:#1CAF6C'> </i></router-link>
</div>
<div class="include">
            <b-card-text>U3 and U2 in Greenbay 1:00 p.m</b-card-text>
           <router-link :to="'/chat/'+'2'"    >
           <i  class="bx bx-chat" style='color:#1CAF6C'> </i>
            </router-link> 
</div>
        </b-card-body>
      </b-collapse>
    </b-card>

    <b-card no-body class="mb-1">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button block v-b-toggle.accordion-2 >DAY 8</b-button>
      </b-card-header>
      <b-collapse id="accordion-2" accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <div class="include">
          <b-card-text>U5 and U6 in Howard Ayeager 9:30 a.m</b-card-text>
           <router-link :to="'/chat/'+'3'"  id="3">
           <i class="bx bx-chat" style='color:#1CAF6C'> </i>
            </router-link> 
            </div>
<div class="include">
          <b-card-text>U6 and U1 in Marjorie P Hart 1:00 p.m</b-card-text>
           <router-link :to="'/chat/'+'4'"  id="4">
           <i class="bx bx-chat" style='color:#1CAF6C'> </i>
            </router-link> 
</div>
        </b-card-body>
      </b-collapse>
    </b-card>

    <b-card no-body class="mb-1">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button block v-b-toggle.accordion-3 >DAY 15</b-button>
      </b-card-header>
      <b-collapse id="accordion-3" accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <div class="include">
                      <b-card-text>U2 and U4 in North 9:30 a/m</b-card-text>
            <router-link :to="'/chat/'+'5'"  id="5">
           <i class="bx bx-chat" style='color:#1CAF6C'> </i>
            </router-link> 
          </div> 

          <div class="include">
          <b-card-text>U3 and U5 in AJ Katzenmaier 1:00 p.m</b-card-text>
           <router-link :to="'/chat/'+'6'"  id="6">
           <i class="bx bx-chat" style='color:#1CAF6C'> </i>
            </router-link> 
          </div>
        </b-card-body>
      </b-collapse>
    </b-card>

    <b-card no-body class="mb-1">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button block v-b-toggle.accordion-4>DAY 22</b-button>
      </b-card-header>
      <b-collapse id="accordion-4" accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <div class="include">
          <b-card-text>U1 and U3 in South 9:30 a.m </b-card-text>
           <router-link :to="'/chat/'+'7'"  id="7">
           <i class="bx bx-chat" style='color:#1CAF6C'> </i>
            </router-link> 
        </div> 
        <div class="include">
            <b-card-text>U2 and U6 in Howard A Yeager 1:00 p.m</b-card-text>
        <router-link :to="'/chat/'+'8'"  id="8">
           <i class="bx bx-chat" style='color:#1CAF6C'> </i>
            </router-link> 
        </div>
        </b-card-body>
      </b-collapse>
    </b-card>

    <b-card no-body class="mb-1">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button block v-b-toggle.accordion-5 >DAY 29</b-button>
      </b-card-header>
      <b-collapse id="accordion-5" accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <div class="include">
                      <b-card-text>U4 and U5 in Greenbay 9:30 a.m</b-card-text>
           <router-link :to="'/chat/'+'9'"  id="9">
           <i class="bx bx-chat" style='color:#1CAF6C'> </i>
            </router-link>    
          </div>
        </b-card-body>
      </b-collapse>
    </b-card>


  </div>
 
 <h2>OCTOBER</h2>

 <div class="accordion" role="tablist">
    <b-card no-body class="mb-1">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button block v-b-toggle.accordion-6 > DAY 6</b-button>
      </b-card-header>
      <b-collapse id="accordion-6" visible accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <div class="include">
                      <b-card-text>U2 and U5 in Marjorie P Hart 9:30 p.m</b-card-text> 
           <router-link :to="'/chat/'+'10'"  id="10"> 
           <i class="bx bx-chat" style='color:#1CAF6C'> </i>
            </router-link> 
          </div>
           <div class="include">
            <b-card-text>U1 and U6 in South 1:00 p.m</b-card-text>
           <router-link :to="'/chat/'+'11'"  id="11">
           <i class="bx bx-chat" style='color:#1CAF6C'> </i>
            </router-link> 
          </div>
        </b-card-body>
      </b-collapse>
    </b-card>

    <b-card no-body class="mb-1">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button block v-b-toggle.accordion-7 >DAY 8</b-button>
      </b-card-header>
      <b-collapse id="accordion-7" accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <div class="include">
                      <b-card-text>U3 and U4 in Howard Ayeager 9:30 a.m</b-card-text>
           <router-link :to="'/chat/'+'12'"  id="12">
           <i class="bx bx-chat" style='color:#1CAF6C'> </i>
            </router-link> 
        </div>
        <div class="include">   
         <b-card-text>U5 and U1 in Greenbay 1:00 p.m"</b-card-text>
            <router-link :to="'/chat/'+'13'"  id="13">
             <i class="bx bx-chat" style='color:#1CAF6C'> </i>
            </router-link> 
        </div>
        </b-card-body>
      </b-collapse>
    </b-card>

    <b-card no-body class="mb-1">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button block v-b-toggle.accordion-8 >DAY 20</b-button>
      </b-card-header>
      <b-collapse id="accordion-8" accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <div class="include">
                      <b-card-text>U6 and U3 in North 9:30 a.m</b-card-text>
           <router-link :to="'/chat/'+'14'"  id="14">
           <i class="bx bx-chat" style='color:#1CAF6C'> </i>
            </router-link> 
          </div> 
          <div class="include">
            <b-card-text>U2 and U4 in Marjorie P Hart 1:00 p.m</b-card-text>
           <router-link :to="'/chat/'+'15'"  id="15">
           <i class="bx bx-chat" style='color:#1CAF6C'> </i>
            </router-link> 
</div>
        </b-card-body>
      </b-collapse>
    </b-card>

    <b-card no-body class="mb-1">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button block v-b-toggle.accordion-9>DAY 27</b-button>
      </b-card-header>
      <b-collapse id="accordion-9" accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <div class="include">
                      <b-card-text>U3 and U1 in AJ Katzenmaier 9:30 a.m </b-card-text>
         <router-link :to="'/chat/'+'16'"  id="16">
           <i class="bx bx-chat" style='color:#1CAF6C'> </i>
            </router-link> 
        </div>
        <div class="include">
            <b-card-text>U5 and U6 in Howard A Yeager 1:00 p.m</b-card-text>
          <router-link :to="'/chat/'+'17'"  id="17">
           <i class="bx bx-chat" style='color:#1CAF6C'> </i>
            </router-link> 
          </div>
        </b-card-body>
      </b-collapse>
    </b-card>

  

  </div>
  </div>
  
</template>

<style lang="scss" >
.btn-secondary{
    background-color: #1CAF6C ;
    color: antiquewhite; 
}

h2{
  text-align: -webkit-center;
    padding-top: 5vh;
    color: #212529;
}
i{
  position: stick;
  left: 3vh;
}
.include{
      display: flex;
    place-content: space-evenly;
}
.card-header{
  background: lightgrey
}
.card-body{
      background: whitesmoke;

}
</style>

