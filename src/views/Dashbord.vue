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
        <div></div>
      </div>

      <!--div liens-->
      <div class="cases_liens">
        <!--div fb-->
        <div></div>
        <!--div twitter-->
        <div></div>
        <!--div linkedin-->
        <div></div>
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
.tab_graph {
  background-color: white;
  margin: 15px;
}
</style>
