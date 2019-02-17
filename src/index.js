export default {
  renderNode(inProps, inEditor, inNext) {
    const { children, ...attributes } = inProps;
    const value = inProps.node.data.get('value');
    switch (props.node.type) {
      case 'alignment':
        return <p style={{ textAlign: value }} children={children} />;
      default:
        return inNext();
    }
  }
};
