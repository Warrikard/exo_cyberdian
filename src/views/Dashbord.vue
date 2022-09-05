<template>
  <main id="Home_page">
    <div class="hp">
      <div style="display: inline">
        <p>Dashboard</p>
      </div>
      <hr />
      <div style="display: inline">
        <p><strong>Home</strong>/ Dashboard</p>
      </div>
    </div>

    <!--div cadre gris-->
    <div class="cg">
      <!--div de couleurs-->
      <div class="cases_couleurs">
        <!--div bleu-->
        <div class="cases_bleu">
          <h2>26K</h2>
          <p>(-12,4%)<br /></p>
          <p>Users</p>
        </div>
        <!--div bleu claire-->
        <div class="cases_bleu_claire">
          <h2>$6.200</h2>
          <p>(40,9%)<br /></p>
          <p>Home</p>
        </div>
        <!--div jaune-->
        <div class="cases_jaune">
          <h2>2,49%</h2>
          <p>(84,7%)<br /></p>
          <p>Converssion rate</p>
        </div>
        <!--div rouge-->
        <div class="cases_rouge">
          <h2>44K</h2>
          <p>(-23,7%)<br /></p>
          <p>Sessions</p>
        </div>
      </div>

      <!--div zone tableau-->
      <div class="cases_tab">
        <!--div entete tableau-->
        <div>
          <div></div>
          <div></div>
        </div>
        <!--div tableau-->
        <div class="tab_graph">
          <Bar
            :chart-options="chartOptions"
            :chart-data="chartData"
            :chart-id="chartId"
            :dataset-id-key="datasetIdKey"
            :plugins="plugins"
            :css-classes="cssClasses"
            :styles="styles"
            :width="width"
            :height="height"
          />
        </div>
        <!--div barre progression-->
        <div class="barre_p">
          <div class="barres">
            <p style="font-size: 12px">Visits</p>
            <h3>29.703 Users (40%)</h3>
            <progress value="40" max="100">40 %</progress>
          </div>
          <div class="barres">
            <p style="font-size: 12px">Unique</p>
            <h3>24.093 Users (20%)</h3>
            <progress value="20" max="100">20 %</progress>
          </div>
          <div class="barres">
            <p style="font-size: 12px">Pageviews</p>
            <h3>78.706 View (60%)</h3>
            <progress value="60" max="100">60 %</progress>
          </div>
          <div class="barres">
            <p style="font-size: 12px">New Users</p>
            <h3>22.123 Users (80%)</h3>
            <progress value="80" max="100">80 %</progress>
          </div>
          <div class="barres">
            <p style="font-size: 12px">Bounce Rate</p>
            <h3>40.15%</h3>
            <progress value="40" max="100">40 %</progress>
          </div>
        </div>
      </div>

      <!--div liens-->
      <div class="cases_liens">
        <!--div fb-->
        <a href="https://fr-fr.facebook.com/">
          <div class="lien1">
            <!-- Pas pu mettre de logo-->
            <h4>FB</h4>
          </div>
        </a>
        <!--div twitter-->
        <a href="https://twitter.com/">
          <div class="lien2">
            <!-- Pas pu mettre de logo-->
            <h4>Twitter</h4>
          </div>
        </a>
        <!--div linkedin-->
        <a href="https://www.linkedin.com/">
          <div class="lien3">
            <!-- Pas pu mettre de logo-->
            <h4>LiknkedIn</h4>
          </div>
        </a>
      </div>
    </div>
  </main>
</template>

<script>
import { Bar } from 'vue-chartjs';
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from 'chart.js';

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
);

export default {
  name: 'BarChart',
  components: { Bar },
  props: {
    chartId: {
      type: String,
      default: 'bar-chart',
    },
    datasetIdKey: {
      type: String,
      default: 'label',
    },
    width: {
      type: Number,
      default: 1000,
    },
    height: {
      type: Number,
      default: 300,
    },
    cssClasses: {
      default: '',
      type: String,
    },
    styles: {
      type: Object,
      default: () => {},
    },
    plugins: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      chartData: {
        labels: ['January', 'February', 'March', 'April', 'June', 'July'],
        datasets: [{ data: [40, 20, 12, 23, 33, 25] }],
      },
      chartOptions: {
        responsive: true,
        plugins: {
          title: {
            display: true,
            text: 'Traffic',
            align: 'start',
            padding: {
              top: 10,
            },
          },
        },
      },
    };
  },
};
</script>

<style lang="scss">
#Home_page {
  margin-right: 10px;
}
.hp {
  margin-left: -10px;
}
hr {
  margin-left: -15px;
}
.cg {
  background-color: grey;
}

.cases_couleurs {
  display: flex;
  flex-direction: row;
  padding: 5px;
  justify-content: space-between;
}

.cases_couleurs div {
  color: white;
  margin: 10px 10px;
  padding: 10px 10px 100px;
  width: 270px;
}

.cases_bleu {
  background-color: navy;
}
.cases_bleu_claire {
  background-color: blue;
}
.cases_jaune {
  background-color: yellow;
}
.cases_rouge {
  background-color: red;
}
.cases_tab {
  margin: 15px;
}
.tab_graph {
  background-color: white;
}
.barre_p {
  display: flex;
  flex-direction: row;
  background-color: rgb(189, 189, 189);
  justify-content: space-between;
}
.barres {
  text-align: center;
  margin: 25px;
}
.cases_liens {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.lien1 {
  text-align: center;
  color: white;
  background-color: navy;
  width: 340px;
  height: 120px;
  padding-top: 50px;
  margin: 25px;
}
.lien2 {
  text-align: center;
  color: white;
  background-color: blue;
  width: 340px;
  height: 120px;
  padding-top: 50px;
  margin: 25px;
}
.lien3 {
  text-align: center;
  color: white;
  background-color: navy;
  width: 340px;
  height: 120px;
  padding-top: 50px;
  margin: 25px;
}
</style>
