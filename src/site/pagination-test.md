---
pagination:
  data: globalDataSet.myData
  size: 1
  alias: item
  # resolve: values
# permalink: {{ pagination.items[0] }}/index.html
permalink: pagination-test/{{item}}/index.html
---
{%- for item in pagination.items %}
  <li>
    <h1>{{ item }}</h1>
    I really did not like the {{ item}}
  </li>
{% endfor -%}