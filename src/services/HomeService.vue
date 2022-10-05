<script>
import BaseService from "./BaseService";

export default {
  name: "HomeService",
  extends: BaseService,
  methods: {
    getSdo() {
      return BaseService.methods.get("v1/daily-sun/latest");
    },
  },
};
</script>
