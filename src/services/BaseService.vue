<script>
import Axios from "axios";

var baseUrl = "http://localhost:4200/services/";

export default {
  name: "BaseService",
  methods: {
    get(api, params) {
      const self = this;
      return Axios.get(baseUrl + api);
    },
  },
};
</script>
